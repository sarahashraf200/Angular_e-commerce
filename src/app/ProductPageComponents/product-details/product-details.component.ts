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

  constructor(public dservice: ProductDataService, private route: ActivatedRoute,
    private productCrudApi: ProductCRUDService) { }
  ngOnInit(): void {
    this.dservice.productInfo.subscribe((data) => {
      this.productCrudApi.GetProduct(data).valueChanges().subscribe(data => {
        if (data != undefined) {
          this.name = data['name']
          this.price = data['price']
          this.desc = data['desc']
          this.img_path = data['img']
        }
      });
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
    this.dservice.setProduct(product);

  }

  DecreaseQuantity(){
    if(this.productQuantity > 1 ){
      this.productQuantity -= 1;
      this.productChoices.controls['qt'].setValue(this.productQuantity);
    }
     
  }
 IncreaseQuantity(){
   if(this.productQuantity <10){
    this.productQuantity += 1;
    this.productChoices.controls['qt'].setValue(this.productQuantity);
  }

}
}
