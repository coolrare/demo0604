import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'My App';
  subtitle = '記載著 <strong style="color: red">Will</strong> 在網路世界的學習心得與技術分享';
  logourl = '/assets/images/logo.png';

  constructor() {
    setTimeout(() => {
      this.sitename = 'The Will Will Web';
    }, 1500);
  }

  ngOnInit() {
  }

}
