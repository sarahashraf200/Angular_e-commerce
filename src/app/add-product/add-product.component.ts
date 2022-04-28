import { Component, OnInit } from '@angular/core';
import { ProductCRUDService } from 'src/app/ProductPageComponents/CRUD/product-crud.service';
import { ProductInfo } from '../ProductPageComponents/CRUD/ProductInfo';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  one = ['jackets']
  two=['shirts']


  
  name :string =""
  price: string =""
  desc: string=""
  img: string= ""

    constructor(private productCrudApi: ProductCRUDService) {
      
     }
 
  ngOnInit(): void {
   
     };

onSubmit(){
  var ProductData = {'name': this.name ,'price': +this.price ,  'desc': this.desc, 'img': this.img}
    this.productCrudApi.AddProduct(ProductData)
    this.price=""
    this.name=""
    this.desc=""
    this.img= ""
}

}