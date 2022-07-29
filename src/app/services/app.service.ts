import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class AppService {

  videoEmit = new ReplaySubject<String>(3)

  constructor(private http:HttpClient) { }
    // https://jsonplaceholder.typicode.com/posts
    // https://jsonplaceholder.typicode.com/todos
  get() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
  getTodos() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }
  secureGet(url: String) {
    return this.http.get("https://jsonplaceholder.typicode.com/todos"+url)

  }
}
