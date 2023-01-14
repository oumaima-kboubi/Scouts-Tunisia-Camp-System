import {Injectable} from '@angular/core';
import {User} from "./model/User";
import {Observable,  map } from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  link = environment.baseURIAuth;

  constructor(private http: HttpClient) {
  }

  userRegister(user: User): Observable<any> {
    const urlRegister=this.link.toString()+"/register"
    return this.http.post(urlRegister, user).pipe(
      map((data:any)=>{
        if(!data) {
          console.log("empty register response");
        }
        // console.log("this is my data:");
        // console.log(data);
      })
    );
  }
  userLogin(user: User): Observable<any> {
    const urlLogin=this.link.toString()+"/login"
    // console.log(this.link);
      return this.http.post(urlLogin,user).pipe(
        map((data:any)=>{
          if(!data) {
            console.log("empty login response");
          }else
          {
            localStorage.setItem('username',data.username)
            localStorage.setItem('email',data.email)
            localStorage.setItem('token',data.token)
          }
        })
      );;

  }
  // userLogin(login: any): Observable<boolean> {
  //   if (login && login.email && login.password) {
  //     return this.http.post("http://localhost:3000/auth/login",login).pipe(
  //       map((data: any) => {
  //         if (!data) {
  //           return false;
  //         }
  //         console.log("###################### decoded use")
  //         localStorage.setItem('access_token', data.access_token);
  //         localStorage.setItem('refresh_token', data.refresh_token);
  //         const decodedUser = this.jwtHelper.decodeToken(data.access_token);
  //         localStorage.setItem('expiration', decodedUser.exp);
  //         console.log(decodedUser)
  //         this.userInfo.next(decodedUser);
  //         return true;
  //       })
  //     );
  //   }
  //   return of(false);
  // }
}
