import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  datagems;

  slideOpts1 = {
    initialSlide: 1,
    autoplay: true,
    slidesPerView: 1,
    speed: 400
  };
   slideOpts2 = {
    initialSlide: 1,
    autoplay: true,
    slidesPerView: 2,
    spaceBetween: 5,
    speed: 400
  };

  sideimage01: any = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fhd%2520background%2F&psig=AOvVaw17YOg1EUBspqmjeu5JbeZA&ust=1604727174852000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPC1pdyY7ewCFQAAAAAdAAAAABAD';

  constructor(
    private api: ApiService
  ) {}
   ngOnInit() {
    this.getDataGems();
    
    
   }
   getDataGems() {
    this.api.getDataGems().subscribe((res:any) => {
      console.log(res.data);
      this.datagems = res.data;

    });
  }

}


