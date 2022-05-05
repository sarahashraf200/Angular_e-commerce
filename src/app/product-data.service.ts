import { Injectable } from '@angular/core';
import { BehaviorSubject , Observable } from 'rxjs';
import { CartCRUDService } from './ProductPageComponents/CRUD/cart-crud.service';
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  

  public cartItemList : any =[]
  public productList = new BehaviorSubject <any>([]);
  public productInfo = new BehaviorSubject<any>([]);
  
  constructor(private cartDbService:CartCRUDService) {}
  getProducts(){
    return this.productList.asObservable();
  } 

  setProduct(product : any){
   this.cartDbService.AddProductToCart(product);
  }

  //from home page set the selected product to send the information in navigation between routes
  setSelectedProduct(itemId:string) {
    this.productInfo.next(itemId);
  }
}