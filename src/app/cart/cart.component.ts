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
  data:Array<any> = [ 1 , 2 , 3 , 4 ,5 ];
  public products : any =[];
  public items : any =[];
  constructor(private cartDbService:CartCRUDService) { }
   sum : number = 0;
   ship : number = 10;
  ngOnInit(): void {
  //this.products = []
    this.cartDbService.GetCartList().snapshotChanges()
    .subscribe(data => {
      this.products = []
      data.forEach(action => {
        var product = action.payload.val()
        product.id = action.key
      this.products.push(product)
      });
            this.products.forEach((item : any) => {
            this.sum += (item.price * item.qt);  
            console.log("sum" , this.sum)
            });
    });
 
  }


  FinalDelete(itemID : string){
    this.cartDbService.FinalDeleteProductFromCart(itemID);
  }
  emptycart(){
    this.sum =0;
    var itemIdList: any =[];
    this.products.forEach((item : any) => {
      itemIdList.push(item.id)  
      });
    this.cartDbService.DeleteCartList(itemIdList) 
  }
  
  addqt(itemID : string , item : any ){
    this.cartDbService.addQuantity(itemID , item)
    this.sum=0;
    
  }
  minusqt(itemID : string , item : any){
    this.cartDbService.minusQuantity(itemID , item)
    this.sum =0;
  }
  
  removeItem(itemId: any){
   this.sum = 0;
    this.cartDbService.DeleteProductFromCart(itemId)
  }
  undo(itemID : string){
    this.cartDbService.undoDeletion(itemID);
    this.sum=0;
  }
  

  
}