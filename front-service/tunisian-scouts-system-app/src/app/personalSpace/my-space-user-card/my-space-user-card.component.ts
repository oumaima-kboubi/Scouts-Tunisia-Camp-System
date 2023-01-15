import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User";
import {ArticleService} from "../../article.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-space-user-card',
  templateUrl: './my-space-user-card.component.html',
  styleUrls: ['./my-space-user-card.component.css']
})
export class MySpaceUserCardComponent implements OnInit {
  user: User = new User();
  constructor(

    private router: Router,
  ) { }
  link=['addArticle']
  ngOnInit(): void {
    this.user.username=localStorage.getItem('username');
  }
  addArticle(){

      this.router.navigate(this.link);
  }
}
