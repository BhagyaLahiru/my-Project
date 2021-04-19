import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
 
 

  
  constructor( public profileServce:ProfileService ,   private router: Router,  ) {}

     ngOnInit() {
      this.getDataUser();

     }
     datauser;

      getDataUser() {

        let id = +localStorage.getItem('userID')
        
         this.profileServce.getDataUser(id).subscribe((res:any) => {
        console.log(res.data);
        this.datauser = res.data;
  
      });
  }

  logOut(){

    this.router.navigateByUrl('/acount');
    localStorage.removeItem('userID');
  }

}
