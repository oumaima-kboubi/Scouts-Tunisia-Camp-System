import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../article.service";

@Component({
  selector: 'app-my-space',
  templateUrl: './my-space.component.html',
  styleUrls: ['./my-space.component.css']
})
export class MySpaceComponent implements OnInit {

  constructor(
    private articleService: ArticleService
  ) {}

  myArticles: any;

  ngOnInit(): void {
    this.articleService.getMyArticles().subscribe(
      (data) => {
        this.myArticles = data;
      },
      (error) => {
        console.log('no articles exist needs to be managed');
      }
    )
  }


}
