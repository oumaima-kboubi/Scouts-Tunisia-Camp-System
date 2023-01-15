import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "./model/User";
import {map, Observable} from "rxjs";
import {Article} from "./model/Article";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  link = environment.baseURIMemory;

  constructor(private http: HttpClient) {
  }

  addArticle(article: Article): Observable<any> {
    const urlAddArticle=this.link.toString()+"/memories"
    return this.http.post(urlAddArticle, article).pipe(
      map((data: any) => {
        if (!data) {
          console.log("empty article response");
        }
        // console.log(data);
      })
    );
  }

  editArticle(article: Article): Observable<any> {
    const urlEditArticle=this.link.toString()+"/memories/"+ encodeURIComponent(article.id)
    console.log(article.id)
    // const editArticle = new Article()
    // editArticle.id=article.id
    // editArticle.author=article.author
    // editArticle.content=article.content
    // editArticle.title=article.title
    // const date =new Date()
    // editArticle.updateDate=date.toString()
    // return this.http.put(urlEditArticle, article,{responseType: 'text'}).pipe(
      return this.http.put(urlEditArticle, article).pipe(
      map((data: any) => {
        if (!data) {
          console.log("empty article response");
        }
        console.log(data);
      })
    );
  }

  getAllArticles(): Observable<any> {
    const urlGetArticle=this.link.toString()+"/memories"
    const response = this.http.get<any>(urlGetArticle)
    console.log(response)
    return response;
  }

  getMyArticles(): Observable<any> {
    let queryParams = new HttpParams();
    const urlGetMyArticles=this.link.toString()+"/memoriesById/"+ encodeURIComponent(localStorage.getItem('username'))
    // queryParams = queryParams.append("username", localStorage.getItem('username'));
    // console.log(queryParams)
    return this.http.get<any>(urlGetMyArticles, {params: queryParams});
  }

  getMyArticle(id: number): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this.http.get<any>("http://127.0.0.1:8000/getArticle/", {params: queryParams});
  }

  // getAuthor( id: number):Observable<any>{
  //   let queryParams = new HttpParams();
  //   queryParams = queryParams.append("id",id);
  //   return this.http.get<any>("http://127.0.0.1:8000/getAuthor/",{params:queryParams});
  // }
  deleteArticle(id: number): Observable<any> {
    const urlDeleteArticle=this.link.toString()+"/memories/"+ encodeURIComponent(id)
    console.log(id)
    // let queryParams = new HttpParams();
    // queryParams = queryParams.append("id", id);
    return this.http.delete(urlDeleteArticle);
  }

  getArticle(id: number): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this.http.get("http://127.0.0.1:8000/deleteArticle/", {params: queryParams});
  }

  addLike(idArticle: number): Observable<any> {
    let queryParams = new HttpParams();
    // console.log(idArticle);
    // console.log(localStorage.getItem('id'));
    queryParams = queryParams.append("articleId", idArticle);
    console.log(idArticle);
    queryParams = queryParams.append("userId", localStorage.getItem('id'));
    console.log(localStorage.getItem('id'));
    return this.http.post("http://127.0.0.1:8000/addLikeArticle/", {params: queryParams});
  }
}
