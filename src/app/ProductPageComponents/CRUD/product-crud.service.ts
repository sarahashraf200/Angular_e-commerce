import { Injectable } from '@angular/core';
import { ProductInfo } from './ProductInfo';
import { HttpClient } from '@angular/common/http';
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

  constructor(private db: AngularFireDatabase, private httpClient: HttpClient) {
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
      category: product.category,
    });
  }

  GetProduct(id: string) {
    return this.httpClient.get("https://hci-web-app-default-rtdb.europe-west1.firebasedatabase.app/Products/" + id + "/.json")
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