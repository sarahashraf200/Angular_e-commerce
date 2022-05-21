import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { reload } from 'firebase/auth';
// import * as internal from 'stream';
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
  min :number =0;
  max:number =99999;

  constructor( private route: ActivatedRoute,
    public productService: ProductDataService,  private auth : AuthService, private crud: ProductCRUDService) { }

  ngOnInit(): void {
    this.route.url.subscribe(url =>{
      this.itemName = this.route.snapshot.params['name'];
      // console.log(this.itemName)
    });
    this.getProducts();

  }

  filter(itemList: any[]): any[] {
    
   
    
    let result: any[] = [];
    
    itemList.forEach(element => {
  
    console.log();
      
      if(element.name.toUpperCase().includes(this.itemName.toUpperCase()))
      {
        if(element.price>=this.min && element.price<=this.max ){ 
          result.push(element);
          return;
        }
      }
      if(element.category.toUpperCase()==(this.itemName.toUpperCase()))
      {
        if(element.price>=this.min && element.price<=this.max ){ 
          result.push(element);
        }
      }
      
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
  star(e:Event){

      console.log(e);
  }
  // clickme(){
  // //  console.log(document.getElementById('mi').value);
  // console.log(this.min);
  // console.log(this.max);
  // this.route;
  // }

}
