import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service' ; 

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  one = ['jackets']
  two=['shirts']
  name: string = "Lightweight Jacket";
  price : number = 50;
  desc : string = " Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."
  size_selection = "";
  color_selection = "";
  qt : number = 0;
  total: number = 0;
  sum : number =0;

  constructor(public dservice: ProductDataService) { }
  Submit (){
   
    //this.sum = this.sum + this.price;
    var product = {name : this.name , price : this.price , desc : this.desc ,size : this.size_selection , color : this.color_selection,
     qt: this.qt , total: this.total , sum: this.sum}
    this.dservice.setProduct(product);
  
  }
  ngOnInit(): void {
  }

}
