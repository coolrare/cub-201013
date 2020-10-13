import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'Hello World';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.sitename = 'OK!!';
    }, 2000);
  }

  changeName(): void {
    this.sitename = 'The Will Will Web';
  }

}
