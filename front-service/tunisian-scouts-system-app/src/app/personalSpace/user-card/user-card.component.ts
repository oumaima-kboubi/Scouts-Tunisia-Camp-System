import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
user: User = new User();

  constructor() { }

  ngOnInit(): void {
    this.user.username=localStorage.getItem('username');
  }

}
