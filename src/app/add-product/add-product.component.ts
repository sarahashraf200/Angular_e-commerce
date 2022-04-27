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


  price=""
  name=""
  desc=""
  img= ""

    constructor(private productCrudApi: ProductCRUDService,  public productService: ProductDataService) {
      
     }
 
  ngOnInit(): void {
   
     };

onSubmit(){
    this.productCrudApi.AddProduct(data).valueChanges().subscribe(data=>{
        this.name = data['name']
        this.price = data['price']
        this.desc = data['desc']
        this.img = data['img']   
        })
    ;
}

}