import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CartService } from './cart.service';
import { Product } from './cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

   cart = [];
   amount: number = 0;

  constructor(private cartService: CartService) { }
  ionViewWillEnter(){
 
    this.cart = this.cartService.getCart();
    this.getAmount();
    // console.log(this.cart)
  }
  

  ngOnInit() {
    console.log(this.cart)
   
  }
  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }
  increaseCartItem(product){
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

 getAmount() {
  this.cart.forEach(prod => {
    this.amount = this.amount + prod.amount * prod.price;
  })
 }

}
