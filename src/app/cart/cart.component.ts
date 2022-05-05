import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service' ; 
import { BehaviorSubject , observable} from 'rxjs';
import { ConstantPool } from '@angular/compiler';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 /* public car_y : any= 0;
  public car_y1  : any = 0;
  public car_y2 : any= 0;
  public total1 : any= 594;
  public total2 : any= 20;
  public total3: any = 30;
  public total_price = 0;
  public total_price1 = 0;
  public total_price2 = 0;
   productx = {
     desc: '',
     price : 0

   }*/
  data:Array<any> = [ 1 , 2 , 3 , 4 ,5 ];
  public products : any =[];
  public items : any =[];
  constructor(public cartService: ProductDataService) { }
   sum : number = 0;
   ship : number = 10;
  ngOnInit(): void {
   this.products = []
   this.cartService.getProducts()
   .subscribe(res=>{
    console.log("ressss" , res)
    // var item = {name : res.name , price : res.price , desc : res.desc ,size : res.size_selection , color : res.color_selection,
    //   qt: res.qt }
    if (res.length !=0){
      this.products.push(res)
      console.log("msh zero")
      this.products.forEach((item : any) => {
        this.sum += item.total;
      
      });
    // console.log(this.sum);
    }
  
    else {
      this.products = [];
    }

   console.log("products from init" , this.products)
   })
 
  }
  


 
 
  

  emptycart(){
    this.cartService.removeAllCart();
    

  }
  
  
  removeItem(index: number){
   this.products = []
   this.sum = 0;
  // this.products.splice(index , 1)
    this.cartService.removeCartItem(index)
   // console.log("productsssss" ,this.products)
 
  
 
    
  }
  

  
}

