import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../product-data.service';
import { BehaviorSubject, observable } from 'rxjs';
import { ProductCRUDService } from '../CRUD/product-crud.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';

import {
  ActivatedRoute
} from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productChoices = new FormGroup({
    size_selection: new FormControl('',Validators.required),
    color_selection: new FormControl('',Validators.required),
  });

  productQuantity:number = 1;


  name: string = "";
  price: number = 0;
  desc: string = ""
  img_path: string = ""

  total: number = 0;
  sum: number = 0;

  constructor(public productDataService: ProductDataService, private route: ActivatedRoute) { }
  ngOnInit(): void {
         this.route.data.subscribe(data =>{
      if (data != undefined) {
        this.name = data["productResolve"].name
        this.price = data["productResolve"].price
        this.desc = data["productResolve"].desc
        this.img_path = data["productResolve"].img
      }
    });

  }

  Submit() {

    var product = {
      name: this.name,
      price: this.price,
      desc: this.desc,
      size: this.productChoices.controls['size_selection'].value,
      color: this.productChoices.controls['color_selection'].value,
      qt: this.productQuantity,
      img: this.img_path
    }
    this.productDataService.setProduct(product);

  }

  DecreaseQuantity(){
    if(this.productQuantity > 1 ){
      this.productQuantity -= 1;
    }
     
  }
 IncreaseQuantity(){
   if(this.productQuantity <10){
    this.productQuantity += 1;
  }

}
}
