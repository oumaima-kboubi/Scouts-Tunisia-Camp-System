import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../model/Article";
import {ArticleService} from "../../article.service";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  hideFooterFromChild=true;

  constructor(
    private articleService: ArticleService
  ) {
  }

  article = [{
    id: 1,
    title: 'hvjkb',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    author:'foulen'
  }, {
    id: 2,
    title: 'uzkebde',
    content: 'Lorem ipsum dolor sit amet, consetat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author:'foulen'
  }, {
    id: 3,
    title: 'ouma',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author:'foulen'
  },
    {
      id: 4,
      title: 'ouma',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author:'foulen'
    },
    {
      id: 5,
      title: 'uzkebde',
      content: 'Lorem ipsum dolor sit amet, consetat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author:'foulen'
    },
    {
      id: 1,
      title: 'hvjkb',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      author:'foulen'
    },{
      id: 4,
      title: 'ouma',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author:'foulen'
    },
    {
      id: 5,
      title: 'uzkebde',
      content: 'Lorem ipsum dolor sit amet, consetat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author:'foulen'
    },
    {
      id: 1,
      title: 'hvjkb',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      author:'foulen'
    },{
      id: 4,
      title: 'ouma',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author:'foulen'
    },
    {
      id: 5,
      title: 'uzkebde',
      content: 'Lorem ipsum dolor sit amet, consetat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author:'foulen'
    },
    {
      id: 1,
      title: 'hvjkb',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      author:'foulen'
    }]
  articles : any;
  ngOnInit(): void {
     this.articleService.getAllArticles().subscribe(
      (data)=>{
        // console.log(data)
        this.articles = data;

        // this.articleService.getAuthor().subscribe(
        //   (author)=>{
        //
        //   }
        // )
      },
       (error)=> {
         console.log('no articles exist needs to be managed');
       }
     )
  }

}
