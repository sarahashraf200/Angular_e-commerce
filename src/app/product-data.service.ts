import { Injectable } from '@angular/core';
import { ProductDetailsComponent } from './ProductPageComponents/product-details/product-details.component';
import { BehaviorSubject , Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  
  public cartItemList : any =[]
  public productList = new BehaviorSubject <any>([]);
 public productInfo = new BehaviorSubject<any>([]);
  

  getProducts(){
    return this.productList.asObservable();
  } 
  setProduct(product : any){
   this.cartItemList.push(product);
   this.productList.next(product);
   //console.log("this is after")
  // console.log(this.cartItemList)
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
   // console.log(this.cartItemList)
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
  removeCartItem(index: number){
   
    this.cartItemList.splice(index, 1);
    for (let p of this.cartItemList){
      this.productList.next(p);
    }
   // this.productList.next(this.cartItemList);
   // console.log("length" , this.cartItemList.length)
    console.log("this is cart" , this.cartItemList)
    //console.log("this is product list" , this.productList)
   // return this.productList.asObservable();

  }

  constructor() 
  { 
   
   
  }
  
  //from home page set the selected product to send the information in navigation between routes
  setSelectedProduct(itemId:string) {
    this.productInfo.next(itemId);
  }
}