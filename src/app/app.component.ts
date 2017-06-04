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
    if ($event.keyCode === 27) {
      this.keyword = '';
    }
  }
}
