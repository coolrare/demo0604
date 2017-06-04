import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  data: any = [];

  constructor(private http: Http) { }

  loadArticles() {
    this.http.get('/api/articles.json')
      .subscribe(res => {
        this.data = res.json();
      });
  }
}
