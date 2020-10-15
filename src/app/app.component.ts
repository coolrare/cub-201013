import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { chartAreaDemo } from './chartAreaDemo';
import { chartPieDemo } from './chartPieDemo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo1';

  constructor() { }

  ngOnInit(): void {
  }
}
