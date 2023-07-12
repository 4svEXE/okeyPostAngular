import { Component } from "@angular/core";
import { ReviewInterface } from "../../../../interfaces";
import { Reviews } from '../../../../db/reviews'

@Component({
  selector: "app-bloggers-reviews",
  templateUrl: "./bloggers-reviews.component.html",
  styleUrls: ["./bloggers-reviews.component.scss"],
})
export class BloggersReviewsComponent {
  imgPath: string = "assets/img/home/reviews/";
  reviews: ReviewInterface[] = Reviews;
}
