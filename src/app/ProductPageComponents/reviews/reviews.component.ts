import { Component, OnInit } from '@angular/core';
import { ReviewCRUDService } from '../CRUD/reviews-crud.service';
import { ProductDataService } from 'src/app/product-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviewForm = new FormGroup({
    reviewText: new FormControl('', Validators.required),
    nameText: new FormControl('', Validators.required),
    emailText: new FormControl('', [Validators.email, Validators.required]),
  });

  reviewsAdded: any = []
  currentProduct: string = ""
  constructor(private reviewsCrudApi: ReviewCRUDService, public productService: ProductDataService) { }

  ngOnInit(): void {
    this.productService.productID.subscribe((productID) => {
      this.currentProduct = productID
      this.reviewsCrudApi.GetReviewsList(productID).valueChanges().subscribe(data => {
        this.reviewsAdded = []
        data.forEach(element => {
          var reviewDetails = { 
            'review': element['review'], 
            'name': element['name'], 
            'currentDate': element['currentDate']
           }
          this.reviewsAdded.push(reviewDetails)
        })
      });
    });
  }

  onSubmit() {
    var reviewDetails = {
      'review': this.reviewForm.controls['reviewText'].value,
      'name': this.reviewForm.controls['nameText'].value,
      'email': this.reviewForm.controls['emailText'].value,
      'currentDate': new Date().toLocaleString()
    }
    this.reviewForm.reset();
    this.reviewsCrudApi.AddReview(reviewDetails, this.currentProduct)

  }

}
