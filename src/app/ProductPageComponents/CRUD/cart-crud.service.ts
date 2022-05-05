import { Injectable } from '@angular/core';
import { ProductInfo } from './ProductInfo';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CartCRUDService {
  
  productsRef: AngularFireList<any>
  productRef: AngularFireObject<any> 

  constructor(private db: AngularFireDatabase) {
    this.productsRef = db.list('Cart/');
    this.productRef = db.object('Cart/');
  }

  // Create Product
  AddProductToCart(product: any) {
    this.productsRef.push({
      name: product.name,
      price: product.price,
      desc: product.desc,
      img: product.img,
      qt: product.qt,
      total: product.total
    });
  }

  GetCartList() {
    this.productsRef = this.db.list('Cart/');
    return this.productsRef;
  }
  // Update Product Object
  UpdateCartItem(product: ProductInfo) {
    this.productRef.update({
      name: product.name,
      price: product.price,
      desc: product.desc,
      img: product.img
    });
  }
  // Delete Product Object
  DeleteProductFromCart(id: string) {
    this.productRef = this.db.object('Cart/' + id);
    this.productRef.remove();
  }

  
   DeleteCartList(itemIdList:any[]) {
    itemIdList.forEach(id => {
      this.productRef = this.db.object('Cart/' + id);
      this.productRef.remove();
    });
  }
}