import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

export  interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[] = [
    { id: 0, name: 'sdfdfdfkf', price: 333, amount: 1 },
    { id: 1, name: 'sdfdfddfkf', price: 332, amount: 1 },
    { id: 2, name: 'sdfdssfdfkf', price: 383, amount: 1 },
    { id: 3, name: 'sdfdfdfkjdjf', price: 393, amount: 1 },
  ];

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }
  getCartItemCount() {
    return this.cartItemCount;
  }
  addProduct(product) {
    let added = false;
    for (let gem of this.cart) {
      if (gem.id === product.id) {
        gem.amount += 1;
        added = true;
        break;
      }

    }
    if (!added) {
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for ( let [index, gem] of this.cart.entries()){
      if (gem.id === product.id){
        gem.amount -= 1;
        if (gem.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);

  }
  removeProduct(product) {
      for (let [index, gem] of this.cart.entries()){
        if (gem.id === product.id) {
          this.cartItemCount.next(this.cartItemCount.value - gem.price);
          this.cart.splice(index, 1);
        }
      }
  }
}
