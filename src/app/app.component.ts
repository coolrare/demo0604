import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = 'Hello';

  data: any;

  constructor(public datasvc: DataService) {
    // this.datasvc.loadArticles();
    // this.data = this.datasvc.data;
    this.datasvc.loadArticles().subscribe(res => {
        this.data = res.json();
      });
  }

  clearKeyword($event: KeyboardEvent) {
    console.log($event);
    this.keyword = '';
  }

  setKeyword(str: string) {
    this.keyword = str;
  }
}
