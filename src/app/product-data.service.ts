import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartCRUDService } from './ProductPageComponents/CRUD/cart-crud.service';
import { ProductCRUDService } from './ProductPageComponents/CRUD/product-crud.service';
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {


  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);
  public productID = new BehaviorSubject<any>([]);

  constructor(private cartDbService: CartCRUDService, private productApiService: ProductCRUDService) { }
  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    if (localStorage.getItem("userID") != null) {
      this.cartDbService.AddProductToCart(product);
    }
  }

  getSelectedProduct(itemId: string) {
    this.productID.next(itemId); //for reviews
    return this.productApiService.GetProduct(itemId)
  }
}