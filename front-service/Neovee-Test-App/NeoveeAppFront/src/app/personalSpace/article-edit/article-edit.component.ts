import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Article} from "../../model/Article";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {
  articleId=0;
  // editReactiveForm : FormGroup;
  // articleToEdit: Article=new Article(1,'titre','contentttttttt\zefergerg\egerg');
  constructor(
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    //get the article's ID
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.articleId=params['articleId'];
         console.log(this.articleId);
      }
    )
  }

    editArticle(){

    }
}
