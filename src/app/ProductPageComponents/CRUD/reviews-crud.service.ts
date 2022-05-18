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
  AddReview(reviewInfo: any,id:string) {
    var review_body = {
      name: reviewInfo.name,
      review: reviewInfo.review,
      currentDate: reviewInfo.currentDate
    }
    this.httpClient.post("https://hci-web-app-default-rtdb.europe-west1.firebasedatabase.app/Reviews/" + id + "/.json",review_body)
    .subscribe(responseData =>
      console.log(responseData)
      )
    // var list = this.db.list('Reviews/'+id);
    // list.push({
    //   name: reviewInfo.name,
    //   review: reviewInfo.review,
    //   currentDate: reviewInfo.currentDate
    // });
  }

  // Fetch Review List
  GetReviewsList(id: string) {
    this.reviewsRef = this.db.list('Reviews/'+ id);
    return this.reviewsRef;
  }
}