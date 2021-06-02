import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SignService } from './sign.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  form: FormGroup;
  constructor(
   
   private signservice : SignService,
    private router: Router, private toastCtrl: ToastController ) { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        first: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        last: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        email: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        address: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        phoneNumber: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        nicNumber: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        password: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.minLength(1)]
        })
      });
  }


  async onsingup() {
    try {
      const res: any = await this.signservice.singup(JSON.stringify({
        firstName: this.form.value.first,
        lastName: this.form.value.last,
        email: this.form.value.email,
        address :this.form.value.address,
        phoneNumber :this.form.value.phoneNumber,
        nic :this.form.value.nicNumber,
        password: this.form.value.password,
        userType: 0,
        approve: 0
      }));

      if (res.message === 'Success') {
        const toast = await this.toastCtrl.create({
          message: 'User created successfully',
          duration: 3000,
          position: 'bottom'
        });

        toast.present();
        this.signservice._userIsAuthenticated  = true;
        this.form.reset();
        this.router.navigateByUrl('/login');
      }

    } catch (err) {
      console.log(err.error);
      const toast = await this.toastCtrl.create({
        message: 'User creation failed',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
    }

  }
}

