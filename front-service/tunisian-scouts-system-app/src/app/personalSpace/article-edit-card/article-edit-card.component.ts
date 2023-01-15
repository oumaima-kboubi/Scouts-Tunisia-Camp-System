import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../model/Article";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleService} from "../../article.service";

@Component({
  selector: 'app-article-edit-card',
  templateUrl: './article-edit-card.component.html',
  styleUrls: ['./article-edit-card.component.css']
})
export class ArticleEditCardComponent implements OnInit {
  test: Date = new Date();
   @Input() articleIdParent:number;
  focus: any;
  focus1: any;
  article: Article = new Article();
  editReactiveForm: FormGroup;
  articleToEdit: Article = new Article();

  onSubmit() {
    // console.log(this.editReactiveForm.value['title']);
    this.article.title=this.editReactiveForm.value.title;
    this.article.content=this.editReactiveForm.value.content;
    this.article.author=localStorage.getItem('username');
    this.article.id=this.articleIdParent;
    console.log(this.article)
    const link =['myspace'];
    this.articleService.editArticle(this.article).subscribe(
      (response)=>{
        // console.log('i a here');

        this.router.navigateByUrl('myspace')
      },
      (error)=>{
        console.log(error);
      }
    );


  }
  onReset(){
    this.editReactiveForm.reset();
  }

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private activatedRoute:ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.editReactiveForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    });
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.article.id=params['articleId'];
        // console.log(this.article.id);
      }
    );

    this.articleService.getMyArticle(this.article.id).subscribe(
      (data)=>{
        // console.log('content repons eget article');
        // console.log(data[0]);
        this.editReactiveForm.patchValue({
          title: data[0].title,
          content: data[0].content,
        });
      }
    );
    // throw this.activatedRoute;
  }
}
