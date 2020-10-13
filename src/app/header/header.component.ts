import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logosrc = '/assets/images/logo.png';
  sitename = 'Hello World';
  subtitle = '記載著 Will 在網路世界的學習心得與技術分享';

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.sitename = 'OK!!';
    // }, 2000);
  }

  changeName($event: MouseEvent): void {
    console.log($event);
    if ($event.ctrlKey) {
      this.sitename = 'The Will Will Web';
    }
  }

}
