import { Component, OnInit } from '@angular/core';
import { BehaviorSubject , observable} from 'rxjs';
import { CartCRUDService } from '../ProductPageComponents/CRUD/cart-crud.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  qt: number =0;
  public products : any =[];
  constructor(private cartDbService:CartCRUDService) { }
   sum : number = 0;
   ship : number = 10;
  ngOnInit(): void {
  // returns an observable of the database key and value and push the data retunred in the products array
    this.cartDbService.GetCartList().snapshotChanges()
    .subscribe(data => {
      this.products = []
      data.forEach(action => {
        var product = action.payload.val()
        product.id = action.key
      this.products.push(product)
      });
      // loop over the products array to calculate the total sum of all the items
            this.products.forEach((item : any) => {
            this.sum += (item.price * item.qt);  
            console.log("sum" , this.sum)
            });
    });
 
  }

 // Deletes an item permenantly from the cart
  FinalDelete(itemID : string){
    this.cartDbService.FinalDeleteProductFromCart(itemID);
    this.sum =0;
  }

  //Deletes all items from the cart

  emptycart(){
    this.sum =0;
    var itemIdList: any =[];
    this.products.forEach((item : any) => {
      itemIdList.push(item.id)  
      });
    this.cartDbService.DeleteCartList(itemIdList) 
  }
  // increment the quantity of an item

  addqt(itemID : string , item : any ){
    this.cartDbService.addQuantity(itemID , item)
    this.sum=0;
    
  }
  // decrement the quantity of an item
  minusqt(itemID : string , item : any){
    this.cartDbService.minusQuantity(itemID , item)
    this.sum =0;
  }
  
   // remove an item temporarly 
  removeItem(itemId: any){
   this.sum = 0;
    this.cartDbService.DeleteProductFromCart(itemId)
  }
  // undo the temporarly removed item
  undo(itemID : string){
    this.cartDbService.undoDeletion(itemID);
    this.sum=0;
  }
  

  
}