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
  status = "";
  user_id: any = ""

  parsed = ""
  parsed_slash = "";


  //parsed_id = JSON.parse(this.user_id)
  productsRef: AngularFireList<any>
  productRef: AngularFireObject<any>

  constructor(private db: AngularFireDatabase, private auth: AuthService, private httpClient: HttpClient) {
    // auth.user_try();

    this.productsRef = db.list("/Cart/" + this.getuserID());
    this.productRef = db.object("/Cart/" + this.getuserID());
   
  }

  setID() {

  }
  // this method is used to get the USER ID which is used to create a SPECIFIC CART for EACH user inside the cart node
  getuserID(){
    if (this.auth.isLoggedIn()) {
      this.user_id = localStorage.getItem("userID")
    }


    if (this.user_id) {
      this.parsed = this.user_id.replace(/\"/g, "")


      this.parsed_slash = this.parsed + "/"
      console.log(this.parsed_slash)
      return this.parsed_slash.toString();
    }
    else{
      return "notFound"
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

  // returns a list of all the products stored in the USER'S cart
  GetCartList() {
    this.productsRef = this.db.list("/Cart/" + this.getuserID());
    return this.productsRef;
  }
 
  // Temporarly deletes an item from the USER's cart with the ability to undo it 
  DeleteProductFromCart(id: string) {
    this.productRef = this.db.object("/Cart/" + this.getuserID() + id);
    this.productRef.update({
      qt: 0
    });
  }
  // deletes an item from the USER'S cart finally and NO ability to undo
  FinalDeleteProductFromCart(id: string) {
    this.httpClient.delete("https://hci-web-app-default-rtdb.europe-west1.firebasedatabase.app" + "/Cart/" + this.getuserID() + id + "/.json")
      .subscribe(data => {
        console.log(data);
      });
  }
// undo the deletion if it's not deleted finally from the cart
  undoDeletion(id: string) {
    this.productRef = this.db.object("/Cart/" + this.getuserID() + id);
    this.productRef.update({
      qt: 1
    });
  }
  // increments the quantity of the item in the USER'S cart
  addQuantity(id: string, qt: any) {
    this.productRef = this.db.object("/Cart/" + this.getuserID() + id);
    qt = qt + 1;
    this.productRef.update({
      qt: qt
    });

    console.log(qt);
  }
  // decrements the quantity of the item in the USER'S cart
  minusQuantity(id: string, qt: any) {
    this.productRef = this.db.object("/Cart/" + this.getuserID() + id);
    qt = qt - 1;
    this.productRef.update({
      qt: qt
    });
 
  }

  // empty the USER'S cart from all the items

  DeleteCartList(itemIdList: any[]) {
    itemIdList.forEach(id => {
      this.productRef = this.db.object("/Cart/" + this.getuserID() + id);
      this.productRef.remove();
    });
  }


  /* UpdateProductFromCart(id: string, qt: number) {
    this.productRef = this.db.object("/Cart/" + this.getuserID() + id);
    this.productRef.update({
      qt: qt
    });

  }*/

   // Update Product Object
  /*UpdateCartItem(product: ProductInfo) {
    this.productRef.update({
      name: product.name,
      price: product.price,
      desc: product.desc,
      img: product.img
    });
  }*/
}
