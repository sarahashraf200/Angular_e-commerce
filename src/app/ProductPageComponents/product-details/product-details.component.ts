import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../product-data.service';
import { BehaviorSubject, observable } from 'rxjs';
import { ProductCRUDService } from '../CRUD/product-crud.service';
import {
  ActivatedRoute
} from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  name: string = "";
  price: number = 0;
  desc: string = ""
  img_path: string = ""

  size_selection = "";
  color_selection = "";
  qt: number = 0;
  total: number = 0;
  sum: number = 0;

  constructor(public dservice: ProductDataService, private route: ActivatedRoute,
    private productCrudApi: ProductCRUDService) { }
  ngOnInit(): void {
    this.dservice.productInfo.subscribe((data) => {
    this.productCrudApi.GetProduct(data).valueChanges().subscribe(data=>{
      if (data!= undefined) {
        this.name = data['name']
        this.price = data['price']
        this.desc = data['desc']
        this.img_path = data['img']
      }
      });
    });
}


Submit() {
  if (this.qt != 0) {
    this.total = this.price * this.qt;
  }
  else {
    this.total = this.price;
    this.qt = 1;
  }

  var product = {
    name: this.name, price: this.price, desc: this.desc, size: this.size_selection, color: this.color_selection,
    qt: this.qt, total: this.total, sum: this.sum
  }
  this.dservice.setProduct(product);

}

}
