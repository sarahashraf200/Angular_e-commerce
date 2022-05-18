import { Injectable } from '@angular/core';
import { ProductInfo } from './ProductInfo';
import { HttpClient } from '@angular/common/http';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { AuthService } from 'src/app/shared/auth.service';
import { JsonPipe } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartCRUDService {
 status ="";
  user_id: any =""
  
  parsed = ""
  parsed_slash = "";
  
 
  //parsed_id = JSON.parse(this.user_id)
  productsRef: AngularFireList<any>
  productRef: AngularFireObject<any> 

  constructor(private db: AngularFireDatabase , private auth : AuthService ,  private httpClient:HttpClient) {
   // auth.user_try();
   
    this.productsRef = db.list(this.getuserID());
    this.productRef = db.object(this.getuserID());
 //  this.user_id = localStorage.getItem("userID")
  }

  setID(){
    
  }
  getuserID(){
    if ( this.auth.user_try()){
      this.user_id = localStorage.getItem("userID")
       }
    
    if (this.user_id){
      this.parsed = this.user_id.replace(/\"/g, "")
                    
    
    this.parsed_slash =  this.parsed + "/"
    console.log(this.parsed_slash)
    return this.parsed_slash.toString();
    }
  else{
    console.log("d")
    return "hello";
  }
}
  // Create Product
  AddProductToCart(product: any) {
    this.productsRef.push({
      name: product.name,
      price: product.price,
      desc: product.desc,
      img: product.img,
      qt: product.qt,
      
    });
  }

  GetCartList() {
    this.productsRef = this.db.list("/Cart/" + this.getuserID());
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
    this.productRef = this.db.object("/Cart/" +this.getuserID() + id);
    this.productRef.update({
      qt : 0
    });
  }

  FinalDeleteProductFromCart(id: string) {
   this.productRef = this.db.object("/Cart/" + this.getuserID() + id);
   this.productRef.remove();
   console.log(this.productRef)
   this.httpClient.delete("https://hci-web-app-default-rtdb.europe-west1.firebasedatabase.app"+ "/Cart/" + this.getuserID() + id +"/.json").subscribe(data => {
    console.log(data);
  });
   console.log("https://hci-web-app-default-rtdb.europe-west1.firebasedatabase.app"+ "/Cart/" + this.getuserID() + id +"/.json")

   

    console.log("??")
  }
  undoDeletion(id: string){
    this.productRef = this.db.object("/Cart/" +this.getuserID() + id);
    this.productRef.update({
      qt : 1
    });
  }
  addQuantity(id: string , qt: any){
    this.productRef = this.db.object("/Cart/" +this.getuserID() + id);
    qt = qt+1;
    this.productRef.update({
      qt : qt
    });
    
    console.log(qt);
  }  
  minusQuantity(id: string , qt: any){
    this.productRef = this.db.object("/Cart/" +this.getuserID() + id);
    qt = qt-1;
    this.productRef.update({
      qt : qt
    });
    console.log(this.getuserID())
    console.log("sarah")
    console.log(qt);
  }  

  UpdateProductFromCart(id: string , qt:number) {
    this.productRef = this.db.object("/Cart/" +this.getuserID() + id);
    this.productRef.update({
      qt : qt
    });
    
  }

  
   DeleteCartList(itemIdList:any[]) {
    itemIdList.forEach(id => {
      this.productRef = this.db.object("/Cart/" +this.getuserID() + id);
      this.productRef.remove();
    });
  }
}
