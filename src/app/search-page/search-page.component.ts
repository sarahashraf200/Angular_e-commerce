import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from '../product-data.service';
import { ProductCRUDService } from '../ProductPageComponents/CRUD/product-crud.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  category:string="all_products"
  itemName: string = "";
  Products :Array<any> = [];

  constructor( private route: ActivatedRoute,
    public productService: ProductDataService,  private auth : AuthService, private crud: ProductCRUDService) { }

  ngOnInit(): void {
    this.route.url.subscribe(url =>{
      this.itemName = this.route.snapshot.params['name'];
      console.log(this.itemName)
    });
    this.getProducts();

  }

  //to be done 
  filter(itemList: any[]): any[] {
    // console.log((this.category));
    
    if(this.category=="all_products"){
    // console.log(this.category);

      return itemList;
    }
    let result: any[] = [];
    
    itemList.forEach(element => {
   
      if(element.category==this.category)
      result.push(element);
      
    });
    return result;
  }
  setcategory(category:string,e:Event){
    this.category=category;
   
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

}
