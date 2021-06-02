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
  data: Product;

  // { id: 0, name: 'sdfdfdfkf', price: 333, amount: 1 },
  // { id: 1, name: 'sdfdfddfkf', price: 332, amount: 1 },
  // { id: 2, name: 'sdfdssfdfkf', price: 383, amount: 1 },
  // { id: 3, name: 'sdfdfdfkjdjf', price: 393, amount: 1 },

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
   
    if(this.cart.length < 1) {
    let prod = {
      id: product.gemID,
      name: product.gemName,
      price: product.price,
      gemImage: product.gemImage,
      amount: 1
    }
    this.cart.push(prod);
    }else {
      this.cart.forEach(prod => {
        if(prod.id == product.gemID) {
       
          this.cart.map(prod => {
            if(prod.id == product.gemID) {
              prod.amount = prod.amount + 1;
            }
            return prod;
          })
        } else {
          console.log( this.cart)
          let newProd = {
            id: product.gemID,
            name: product.gemName,
            gemImage: product.gemImage,
            price: product.price,
            amount: 1
          }
         
          this.cart.push(newProd);
        }
      })
    }
    // let added = false;
    // for (let gem of this.cart) {
    //   if (gem.id === product.id) {
    //     gem.amount += 1;
    //     added = true;
    //     break;
    //   }

    // }
    // if (!added) {
    //   this.cart.push(product);
    // }
    // this.cartItemCount.next(this.cartItemCount.value + 1);
  }

//   approve: true
// gemBid: false
// gemDescription: "hdjkfbd dksjfd s kldfjslf dfsl"
// gemID: 26
// gemImage: "https://firebasestorage.googleapis.com/v0/b/artifex-c4411.appspot.com/o/firebaseSampleTest%2Fgem-gray.jpg1618631181584?alt=media&token=b9783a6a-5153-43c0-8e1d-451273bd83d6"
// gemName: "Topaz"
// price: 4700
// userId: 2

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
