import { Component, OnInit } from '@angular/core';
import { ProductCRUDService } from 'src/app/ProductPageComponents/CRUD/product-crud.service';
import { ProductInfo } from '../ProductPageComponents/CRUD/ProductInfo';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  categories = ['women', 'Men']

  newProductForm = new FormGroup({
    category: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
  });

  constructor(private productCrudApi: ProductCRUDService) { }

  ngOnInit(): void {

  };

  onSubmit() {
    var ProductData = {
      'name': this.newProductForm.controls['name'].value,
      'price': +this.newProductForm.controls['price'].value,
      'desc': this.newProductForm.controls['desc'].value,
      'img': this.newProductForm.controls['img'].value,
      'category': this.newProductForm.controls['category'].value
    }
    console.log(ProductData)
    this.productCrudApi.AddProduct(ProductData)
    this.newProductForm.reset()
  }

}