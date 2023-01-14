import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from "../../article.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-space-article-card',
  templateUrl: './my-space-article-card.component.html',
  styleUrls: ['./my-space-article-card.component.css']
})
export class MySpaceArticleCardComponent implements OnInit {
  @Input() title
  @Input() content
  @Input() author
  @Input() id
  @Input() updateDate

  constructor(
    private articleService: ArticleService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    //   if(localStorage.getItem('username')=== this.author){
    //     this.hideLike= true;
    //   }else{
    //     this.hideLike= false;
    //   }
    //   console.log(this.hideLike);
  }

  deleteMyArticle(id: number) {
    const link = ['myspace'];
    this.articleService.deleteArticle(id).subscribe(
      (data) => {
        console.log(id)
        this.router.navigateByUrl('getAllArticles');
        // console.log('je suis aprés navigate delete')
      },
      (error) => {
        console.log('no articles exist needs to be managed');
      }
    )
  }
  // editMyArticle(id: number) {
  //   const link = ['myspace'];
  //   const idAr=
  //   this.articleService.editArticle(id).subscribe(
  //     (data) => {

  //     },
  //     (error) => {
  //       console.log('no articles exist needs to be managed');
  //     }
  //   )
  // }
}
