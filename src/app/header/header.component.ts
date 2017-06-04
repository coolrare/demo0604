import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'My App';

  logourl = '/assets/images/logo.png';

  constructor() {
    setTimeout(() => {
      this.sitename = 'The Will Will Web';
    }, 1500);
  }

  ngOnInit() {
  }

}
