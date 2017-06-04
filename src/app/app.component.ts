import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = 'Hello';

  clearKeyword($event: KeyboardEvent) {
    console.log($event);
    this.keyword = '';
  }

  setKeyword(str: string) {
    this.keyword = str;
  }
}
