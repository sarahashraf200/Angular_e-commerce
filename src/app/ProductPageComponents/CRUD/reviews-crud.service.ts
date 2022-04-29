import { Injectable } from '@angular/core';
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

  constructor(private db: AngularFireDatabase) {
    this.reviewsRef = db.list('Reviews/');
    this.reviewRef = db.object('Review/');
  }

  // Create Review
  AddReview(reviewInfo: any,id:string) {
    var list = this.db.list('Reviews/'+id);
    list.push({
      name: reviewInfo.name,
      review: reviewInfo.review,
    });
  }

  // Fetch Single Review Object
  GetProduct(id: string) {
    this.reviewRef = this.db.object('Reviews/Jacket/' + id);
    return this.reviewRef;
  }
  // Fetch Review List
  GetReviewsList(id: string) {
    this.reviewsRef = this.db.list('Reviews/'+ id);
    return this.reviewsRef;
  }
}