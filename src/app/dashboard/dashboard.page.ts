import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  gemlist;
  
  gemlistFix=[];
  gemlistBid=[];
  

  constructor( private apiService: ApiService) { }

  ngOnInit() {
 
  }
  
  ionViewWillEnter() {
    this.gemList() 
  }
  
  gemList() {
   
    this.apiService.getDataGems().subscribe((res:any) => {
      console.log(res.data);
      this.gemlist=res.data;
      console.log(this.gemlist.length);
 
         
      let indx=0;
      this.gemlist.forEach((gem)=>{
        if(gem.gemBid){
          this.gemlistBid[indx] = gem;
          indx++;
        }
      });

      let indxx=0;
      this.gemlist.forEach((gem)=>{
        if(!gem.gemBid){
          this.gemlistFix[indxx] = gem;
          indxx++;
        }
      });


    });
  }
}
