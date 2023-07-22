import { Component } from '@angular/core';
import { PostInterface } from './../../../interfaces/index';
import { Posts } from 'src/app/db/posts';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  imgPath: string = "assets/img/blog/";
  // Current page in pagination
  page: number = 1;
  posts: PostInterface[] = Posts;

  pageChangeHandler(event: any){
    this.page = event;
    window.scrollTo(0, 0);
  }

}
