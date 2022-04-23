import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../product-data.service' ; 

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 name: string = "Lightweight Jacket";
 price : number = 50;
 desc : string = " Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."
 size_selection = "";
 color_selection = "";
 qt : number = 0;
 total: number = 0;
 sum : number =0;
  
  constructor (public dservice: ProductDataService) {
  

   }

   Submit (){
     if (this.qt !=0){
     this.total = this.price * this.qt;}
     else {
       this.total = this.price;
       this. qt = 1;
     }
     //this.sum = this.sum + this.price;
     var product = {name : this.name , price : this.price , desc : this.desc ,size : this.size_selection , color : this.color_selection,
      qt: this.qt , total: this.total , sum: this.sum}
     this.dservice.setProduct(product);
   
   }
   

   

  ngOnInit(): void {

  }
  
  

}
