import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../product-data.service';
import { BehaviorSubject, observable } from 'rxjs';
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

  size_selection = "";
  color_selection = "";
  qt: number = 0;
  total: number = 0;
  sum: number = 0;

  constructor(public dservice: ProductDataService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.name = data['productInfo'].name
      this.price = data['productInfo'].price
      this.desc = data['productInfo'].desc
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
