import { Injectable } from '@angular/core';
import { BehaviorSubject , Observable } from 'rxjs';
import { CartCRUDService } from './ProductPageComponents/CRUD/cart-crud.service';
import { ProductCRUDService } from './ProductPageComponents/CRUD/product-crud.service';
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  

  public cartItemList : any =[]
  public productList = new BehaviorSubject <any>([]);
  public productInfo = new BehaviorSubject<any>([]);
  
  constructor(private cartDbService:CartCRUDService,private productApiService:ProductCRUDService) {}
  getProducts(){
    return this.productList.asObservable();
  } 

  setProduct(product : any){
   this.cartDbService.AddProductToCart(product);
  }

  //from home page set the selected product to send the information in navigation between routes
  setSelectedProduct(itemId:string) {
    return this.productApiService.FetchProductDetails(itemId)
    // this.productInfo.next(itemId);
  }
}