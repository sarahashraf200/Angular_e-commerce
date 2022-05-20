import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ReviewCRUDService {
  
  reviewsRef: AngularFireList<any>
  reviewRef: AngularFireObject<any> 

  constructor(private db: AngularFireDatabase,private httpClient:HttpClient) {
    this.reviewsRef = db.list('Reviews/');
    this.reviewRef = db.object('Review/');
  }

  // Create Review
  AddReview(reviewInfo: any,productID:string) {
    var review_body = {
      name: reviewInfo.name,
      review: reviewInfo.review,
      currentDate: reviewInfo.currentDate
    }
    this.httpClient.post("https://hci-web-app-default-rtdb.europe-west1.firebasedatabase.app/Reviews/" + productID + "/.json",review_body)
    .subscribe(responseData =>
      console.log(responseData)
      )
  }

  // Fetch Review List
  GetReviewsList(productID: string) {
    this.reviewsRef = this.db.list('Reviews/'+ productID);
    return this.reviewsRef;
  }
}