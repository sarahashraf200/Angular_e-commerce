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
    console.log(this.cartItemList)
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  constructor() 
  { 
   
   
  }
}
