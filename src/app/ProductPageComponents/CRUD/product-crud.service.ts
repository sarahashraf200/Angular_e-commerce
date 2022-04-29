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
export class ProductCRUDService {
  
  productsRef: AngularFireList<any>
  productRef: AngularFireObject<any> 

  constructor(private db: AngularFireDatabase) {
    this.productsRef = db.list('Products/');
    this.productRef = db.object('Products/');
  }

  // Create Product
  AddProduct(product: ProductInfo) {
    this.productsRef.push({
      name: product.name,
      price: product.price,
      desc: product.desc,
      img: product.img,
    });
  }
  // Fetch Single Product Object
  GetProduct(id: string) {
    this.productRef = this.db.object('Products/' + id);
    return this.productRef;
  }
  // Fetch Products List
  GetProductsList() {
    this.productsRef = this.db.list('Products/');
    return this.productsRef;
  }
  // Update Product Object
  UpdateProduct(product: ProductInfo) {
    this.productRef.update({
      name: product.name,
      price: product.price,
      desc: product.desc,
      img: product.img
    });
  }
  // Delete Product Object
  DeleteProduct(id: string) {
    this.productRef = this.db.object('Products/' + id);
    this.productRef.remove();
  }
}