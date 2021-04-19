import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router, 
  ) {
    this.initializeApp();
  }

  IsLogin: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  //  this.IsLogin =  localStorage.getItem("IsLogin");
  }

  // onSelect() {
  //   if(this.IsLogin == "yse") {
  //     this.router.navigateByUrl('/profile')
  //   } else {
  //     this.router.navigateByUrl('/acount')
  //   }

  // }

  goAccount(){

    let userId = +localStorage.getItem('userID')
    if( userId > 0 ) {
      this.router.navigateByUrl('/profile')
    } else {
      this.router.navigateByUrl('/acount')
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
