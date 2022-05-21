import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { ProductCRUDService } from '../ProductPageComponents/CRUD/product-crud.service';
import { _getEventTarget } from '@angular/cdk/platform';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  Products :Array<any> = [];
  selectedProduct : any
  itemId:string = ""
  category:string="all_products"
  flag='all_products'
  constructor(private dataService: ProductDataService,
    private route: ActivatedRoute , private auth : AuthService, private crud: ProductCRUDService) { }

  ngOnInit(): void {
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.getProducts();
    // this.category = this.route.snapshot.params['category']
    // console.log(this.category);

    // this.productService.setSelectedProduct(this.itemId)
  }
  
  logout (){
    this.auth.logout();
  }
  getProducts(){
    this.crud.GetProductsList().snapshotChanges()
    .subscribe(actions => {
      actions.forEach(action => {
        var product = action.payload.val() 
        product.id = action.key
      this.Products.push(product)
      });
    });

  }
  filter(itemList: any[]): any[] {
    
    // console.log((this.category));
    
    if(this.category=="all_products"){
    // console.log(this.category);

      return itemList;
    }
    let result: any[] = [];
    
    itemList.forEach(element => {
      // console.log(element.category);
      // console.log(element.id)
      
   
      if(element.category==this.category)
      result.push(element);
      
    });
    return result;
  }
  setcategory(category:string,e:Event){
    this.category=category;
   
  }

}
