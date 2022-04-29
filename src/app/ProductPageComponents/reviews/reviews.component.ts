import { Component, OnInit } from '@angular/core';
import { ReviewCRUDService } from '../CRUD/reviews-crud.service';
import { ProductDataService } from 'src/app/product-data.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviewText:string=""
  nameText:string=""
  emailText:string=""
  reviewsAdded: any =[]
  currentDate:any
  currentProduct: string = ""
  constructor(private reviewsCrudApi: ReviewCRUDService, public productService: ProductDataService) { }

  ngOnInit(): void {
    this.productService.productInfo.subscribe((data) => {
      this.currentProduct = data
      this.reviewsCrudApi.GetReviewsList(data).valueChanges().subscribe(data=>{
          this.reviewsAdded = []
          data.forEach(element => {
            var reviewDetails = {'review': element['review'],'name':element['name']}
            this.reviewsAdded.push(reviewDetails)   
          })
      });
     });

    }

  onSubmit(){
    this.currentDate = new Date();
    var reviewDetails = {'review': this.reviewText,'name': this.nameText,'email': this.emailText}
    console.log(this.currentProduct)
    this.reviewsCrudApi.AddReview(reviewDetails,this.currentProduct)

    this.reviewText=""
    this.nameText=""
    this.emailText=""
  }

}
