import { Component, OnInit } from '@angular/core';
import { ProductCRUDService } from '../ProductPageComponents/CRUD/product-crud.service';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  selectedProduct : any
  constructor(private productCrudApi: ProductCRUDService,private dataService: ProductDataService) { }

  ngOnInit(): void {
    this.productCrudApi.GetProduct("Shirt").valueChanges().subscribe(details => {
      this.selectedProduct = details
    }); 
  }

  GotoProduct(){
    //saves the product details in the service to be attained on resolver
    this.dataService.setSelectedProduct(this.selectedProduct )
  }

}
