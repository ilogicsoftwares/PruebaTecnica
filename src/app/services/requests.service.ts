import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }


  post(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  comment(id){
    return this.http.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
  }
}
