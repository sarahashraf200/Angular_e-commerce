import { Component, OnInit } from '@angular/core';
import { ProductCRUDService } from '../CRUD/product-crud.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {


  constructor(private productCrudApi: ProductCRUDService) { }

  ngOnInit(): void {
    this.productCrudApi.GetProduct("Jacket").valueChanges().subscribe(details => {
      console.log(details["price"])});   
  }


}
