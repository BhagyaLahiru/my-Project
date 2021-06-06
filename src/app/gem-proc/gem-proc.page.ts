import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../cart/cart.service';
import { GemProcService } from './gem-proc.service';

@Component({
  selector: 'app-gem-proc',
  templateUrl: './gem-proc.page.html',
  styleUrls: ['./gem-proc.page.scss'],
})
export class GemProcPage implements OnInit {
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  constructor(public gemProcService: GemProcService, private router: Router, private cartService: CartService, private modalCtrl: ModalController) { }

  ngOnInit() {
    //this.products  = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }
  addToCart(product) {
    //console.log(product)
    this.cartService.addProduct(product);
  }

  cartItem: any = [];
  addCartItem(obj) {
    if (JSON.parse(localStorage.getItem("cartItem")) && JSON.parse(localStorage.getItem("cartItem")).length) {
      this.cartItem = JSON.parse(localStorage.getItem("cartItem"));
      let inCart=false;
      for (let i = 0; i < this.cartItem.length; i++) {
        if (this.cartItem[i].gemID == obj.gemID) {
          this.cartItem[i].qq++;
          inCart=true;
        }
      }
      if(!inCart){
        let tempObj = obj
        tempObj.qq = 1;
        this.cartItem[this.cartItem.length] = tempObj;
      }


      localStorage.setItem('cartItem', JSON.stringify(this.cartItem));

    }
    else {
      let thisObj = []
      thisObj[0] = obj;
      thisObj[0].qq = 1;
      localStorage.setItem('cartItem', JSON.stringify(thisObj));
    }
  }

  openCart() {

  }

  gem: any = {};

  ionViewWillEnter() {
    this.getDatagem();

  }
  getDatagem() {

    this.gem = JSON.parse(localStorage.getItem('gemID'))
    console.log("GEEEM ", this.gem);
    //     let id = +localStorage.getItem('gemID')

    //   this.gemProcService.getDatagem(id).subscribe((res:any) => {
    //    console.log("GEEEM ",res.data);
    //    this.gem = res.data[0];

    //  });

  }
}
