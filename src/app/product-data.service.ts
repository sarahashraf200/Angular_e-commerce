import { Injectable } from '@angular/core';
import { ProductDetailsComponent } from './ProductPageComponents/product-details/product-details.component';
import { BehaviorSubject , Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  
  public cartItemList : any =[]
  public productList = new BehaviorSubject <any>([]);

  

  getProducts(){
    return this.productList.asObservable();
  } 
  setProduct(product : any){
   this.cartItemList.push(product);
   this.productList.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
  ///  console.log(this.cartItemList)
  }

  constructor() 
  { 
   
   
  }
}
