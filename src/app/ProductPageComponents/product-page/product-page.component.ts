import { Component, OnInit } from '@angular/core';

import { ProductDataService } from 'src/app/product-data.service';
import {
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  public itemId: string = "";

  constructor(private route: ActivatedRoute,
    public productService: ProductDataService) { }

  ngOnInit(): void {
    // this.itemId = this.route.snapshot.params['id']
  }


}
