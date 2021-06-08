import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { timer } from 'rxjs';
import { Subscription } from 'rxjs';
import { GemProcService } from '../gem-proc/gem-proc.service';

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.page.html',
  styleUrls: ['./bidding.page.scss'],
})
export class BiddingPage implements OnInit, OnDestroy {

  form: FormGroup;
  countDown: Subscription;
  counter = 0;
  tick = 1000;
  userId: any;
  gemId: any;
  max: any;
  bidValue: any;
  worning = false;
  constructor(private router: Router, private  gemProcService:  GemProcService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.form = new FormGroup(
      { amount: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        })
      });
      this.userId = +localStorage.getItem('userID');
      this.gemId = +localStorage.getItem('gemId');

      const body = {
       gemId: this.gemId ,
       userId: this.userId 
      }
      const time= localStorage.getItem('time');
      this.timer(time)
    this.fetchDate(body);
      
  }


  async fetchDate(body) {

    try{
      const res: any = await this.gemProcService.fetchBid(body);
      this.bidValue = res.data[0].bidValue;
      this.max = res.data[0].max;
      console.log(res)
    } catch(err) {
      const toast = await this.toastCtrl.create({
        message: 'server error',
        duration: 3000,
        position: 'bottom'
      });
    
      toast.present();  
    }

  }


  timer(time: any) {
    const currentDate = new Date();
    const expireDate = new Date(time);
   
    this.counter = expireDate.getTime()/1000 - currentDate.getTime()/1000; // *3600
    if(this.counter < 0) {
      this.router.navigateByUrl('/home')
    }
    this.countDown = timer(0, this.tick).subscribe(() => {
      --this.counter;
    });

  }


 async onSubmit() {

 const amount = this.form.value.amount

 if (amount > this.max) {
  this.worning = false;
  const body = {
    gemId:  this.gemId,
    userId: this.userId,
    bidValue: amount
   }
   if(this.bidValue == 0) {
     try{
     const res: any = await  this.gemProcService.addBid(body);
     if(res.success) {
       this.ngOnInit();
     }
     console.log(res)
     } catch (err) {
      const toast = await this.toastCtrl.create({
        message: 'server error',
        duration: 3000,
        position: 'bottom'
      });
    
      toast.present();
     }
     
   } else {
    try{
      const res: any = await  this.gemProcService.updateBid(body);
      console.log(res)
      if(res.success) {
        this.ngOnInit();
      }
      } catch (err) {
        const toast = await this.toastCtrl.create({
          message: 'server error',
          duration: 3000,
          position: 'bottom'
        });
      
        toast.present();
      } 
    
   }
 } else {
   this.worning = true;
  const toast = await this.toastCtrl.create({
    message: 'Your value should be grater',
    duration: 3000,
    position: 'bottom'
  });

  toast.present();
  this.ngOnInit();
 }


    // this.gemProcService.addBid()

//     bidId: 0
// bidValue: 0
// gemID: 0
// max: 0
  }

  ngOnDestroy() {
   localStorage.removeItem('userID')
   localStorage.removeItem('gemId')
  console.log("destroy")
  this.countDown.unsubscribe();
  }

}


