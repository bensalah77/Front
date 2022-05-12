import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
baseURL ="http://localhost:8082/form/getArt";
baseURL2 ="http://localhost:8082/form/addart";
baseURL3 ="http://localhost:8082/form/modify-art";
baseURL4 ="http://localhost:8082/form/remove-art";
id?: number;
//baseURL2 ="http://localhost:8082/form/addart";
  constructor(private httpClient: HttpClient) { }
  //http://localhost:8080/api/v1/employees
getallArticles(): Observable<Article[]>{
  return this.httpClient.get<Article[]>(`${this.baseURL}`);
}
//addarticle
//http://localhost:8080/api/v1/employees
addArticle (article?: Article): Observable<object>{
return this.httpClient.post<object>(`${this.baseURL2}`,article);
}

  getid(getid?: number){
    this.id = getid; 
  }
  getArticleById(id?: number): Observable<object>{
    return this.httpClient.get<Object>(`${this.baseURL}/${id}`);
  }
  updatearticleById(article?: Article): Observable<Object>{
    return this.httpClient.put<Object>(`${this.baseURL3}/${this.id}`, article);
  }
  deletearticleById(id?: number): Observable<Object>{
    return this.httpClient.delete<Object>(`${this.baseURL4}/${id}`);
  }
}
