import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  logosrc = '/assets/images/logo.png';

  @Input() sitename = 'Hello World';

  subtitle = '記載著 Will 在網路世界的學習心得與技術分享';
  counter = 12;

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.sitename = 'OK!!';
    // }, 2000);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  changeName($event: MouseEvent): void {
    console.log($event);
    this.counter++;
    if ($event.ctrlKey) {
      this.sitename = 'The Will Will Web';
    }
  }

}
