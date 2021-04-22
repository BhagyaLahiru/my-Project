import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, PopoverController, ToastController } from '@ionic/angular';
// import { SignService } from '../sign-in/sign.service';
import { SignService } from '../sign-in/sign.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  Signservice: any;
  constructor( 
    private signservice: SignService, 
    private router: Router, 
    private toastCtrl: ToastController,
   
    ) { }

  ngOnInit() {
    this.form = new FormGroup(
      { user: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        password: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        })
      });
  }

  // onCreateGem() {
  //   if (!this.form.valid) {
  //     return;
  //   }
  //   console.log(this.form);
  // }

  async login() {

    try {

      const res: any = await this.signservice.login(JSON.stringify({
        email: this.form.value.user,
        password: this.form.value.password
      }));
      console.log(res);
      if (res.message == "Success") {
        localStorage.setItem('userID', res.data[0].Id)
        const toast = await this.toastCtrl.create({
          message: 'Successfully login',
          duration: 3000,
          position: 'bottom'
        });

        toast.present();
        this.signservice._userIsAuthenticated  = true;
        this.form.reset();
        this.router.navigateByUrl('/profile');
      }

    } catch (err) {
      // console.log(err.error.message);
      const toast = await this.toastCtrl.create({
        message: 'Login failed',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
    }
    }

}
