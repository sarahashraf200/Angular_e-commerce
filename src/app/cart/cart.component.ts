import { Component, OnInit } from '@angular/core';
import { BehaviorSubject , observable} from 'rxjs';
import { CartCRUDService } from '../ProductPageComponents/CRUD/cart-crud.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  data:Array<any> = [ 1 , 2 , 3 , 4 ,5 ];
  public products : any =[];
  public items : any =[];
  constructor(private cartDbService:CartCRUDService) { }
   sum : number = 0;
   ship : number = 10;
  ngOnInit(): void {
   this.products = []
    this.cartDbService.GetCartList().snapshotChanges()
    .subscribe(data => {
      this.products = []
      data.forEach(action => {
        var product = action.payload.val()
        product.id = action.key
      this.products.push(product)
      });
            this.products.forEach((item : any) => {
            this.sum += item.total;   
            });
    });
 
  }


  emptycart(){
    var itemIdList: any =[];
    this.products.forEach((item : any) => {
      itemIdList.push(item.id)  
      });
    this.cartDbService.DeleteCartList(itemIdList) 
  }
  
  
  removeItem(itemId: any){
   this.sum = 0;
    this.cartDbService.DeleteProductFromCart(itemId)
  }
  

  
}

