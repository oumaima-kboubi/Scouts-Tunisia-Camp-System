import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../../model/User";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  test : Date = new Date();
  focus: any;
  focus1 : any;
  user: User = new User();
  errorMessage='';
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {

  }

  onSubmit(registerFormulaire: NgForm){

    const link =['login'];
    this.authService.userRegister(registerFormulaire.value).subscribe(
      (response)=>{
          this.router.navigate(link)
      },
      (error)=>{
        this.errorMessage = `Problème de cnx à register server`;
        console.log(error);
      }
    );


  }

  ngOnInit(): void {
  }

}
