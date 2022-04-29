import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { ProductCRUDService } from '../ProductPageComponents/CRUD/product-crud.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  Products :Array<any> = [];
  selectedProduct : any
  itemId:string = "Jacket"
  constructor(private dataService: ProductDataService,
    private route: ActivatedRoute , private auth : AuthService, private crud: ProductCRUDService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  logout (){
    this.auth.logout();
  }
  getProducts(){
    this.crud.GetProductsList().valueChanges().subscribe(data => {
      if (data != undefined) {
        this.Products = data;
        // console.log(this.Products);
        console.log(this.Products[0].desc);
        // console.log(this.Products[0][0]);
        
      }
    }
    );
  }



}
