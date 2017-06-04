import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  sitename = 'My App';

  @Output()
  change = new EventEmitter<any>();

  subtitle = '記載著 Will 在網路世界的學習心得與技術分享';
  logourl = '/assets/images/logo.png';

  counter = 0;

  constructor() {
  }

  ngOnInit() {
  }

  changeTitle() {
    this.sitename = 'The Will Will Web';
    this.change.emit(this.sitename);
  }

  addCounter() {
    this.counter++;
  }

  IsHighlight() {
    return this.counter % 2 === 0;
  }

  ShowHighlight() {
    return { 'highlight': this.IsHighlight() };
  }

}
