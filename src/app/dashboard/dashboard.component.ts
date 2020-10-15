import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { chartAreaDemo } from '../chartAreaDemo';
import { chartPieDemo } from '../chartPieDemo';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    chartAreaDemo();
    chartPieDemo();
  }

  goTo1(): void {
    this.router.navigate(['/utilities/color', 3], {
      queryParams: {
        name: 'Baiden'
      }
    });
  }
  goTo2(): void {
    this.router.navigateByUrl('/utilities/color/4?name=Trump');
  }
}
