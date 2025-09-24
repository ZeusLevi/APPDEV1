import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: false,
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  reviewContent = 0;
  reviewStyle = 0;
  reviewUserFriendliness = 0;

  incrementReviewContent(){
    if (this.reviewContent < 5){
      this.reviewContent++;
    }
  }
  decrementReviewContent(){
    if(this.reviewContent > 0){
      this.reviewContent--;
    }
  }
  incrementReviewStyle(){
    if(this.reviewStyle < 5){
      this.reviewStyle++;
    }
  }
  decrementReviewStyle(){
    if(this.reviewStyle > 0){
      this.reviewStyle--;
    }
  }
  incrementReviewUserFriendliness(){
    if(this.reviewUserFriendliness < 5){
      this.reviewUserFriendliness++;
    }
  }
  decrementReviewUserFriendliness(){
    if(this.reviewUserFriendliness > 0){
      this.reviewUserFriendliness--;
    }
  }
}
