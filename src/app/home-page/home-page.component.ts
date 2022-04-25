import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  selectedProduct : any
  itemId:string = "Jacket"
  constructor(private dataService: ProductDataService,
    private route: ActivatedRoute , private auth : AuthService) { }

  ngOnInit(): void {
  }
  logout (){
    this.auth.logout();
  }


}
