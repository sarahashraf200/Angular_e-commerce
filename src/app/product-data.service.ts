import { Injectable } from '@angular/core';
import { ProductDetailsComponent } from './ProductPageComponents/product-details/product-details.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductInfo } from './ProductPageComponents/CRUD/ProductInfo';


@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);
  productInfo: any



  getProducts() {
    return this.productList.asObservable();
  }
  setProduct(product: any) {
    this.cartItemList.push(product);
    this.productList.next(product);
  }
  addtoCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    ///  console.log(this.cartItemList)
  }

  //from home page set the selected product to send the information in navigation between routes
  setSelectedProduct(selectedProduct: ProductInfo ) {
    this.productInfo = selectedProduct
  }

  constructor() {


  }
}
