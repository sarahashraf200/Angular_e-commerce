import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  selectedProduct : any
  itemId:string = "Jacket"
  constructor(private dataService: ProductDataService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


}
