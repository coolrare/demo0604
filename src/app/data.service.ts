import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  loadArticles(): Observable<Response> {
    return this.http.get('/api/articles.json');
  }
}
