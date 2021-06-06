import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userApprove = [];
 
 

  
  constructor( public profileServce:ProfileService ,   private router: Router,  ) {}

     ngOnInit() {
 
     }
     datauser;

     
     ionViewWillEnter() {
      this.getDataUser();
      console.log("this is work")
     }
      getDataUser() {

        let id = +localStorage.getItem('userID')
        
         this.profileServce.getDataUser(id).subscribe((res:any) => {
        console.log(res.data);
        this.datauser = res.data;

        let indx=0;
        this.datauser.forEach((user)=>{
          if(user.approve){
            this.userApprove[indx] = user;
            indx++;
          }
        });
  
      });
  }

  logOut(){

    this.router.navigateByUrl('/acount');
    localStorage.removeItem('userID');
  }

}
