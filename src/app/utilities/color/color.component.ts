import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  name = '';
  type = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // const p: Params = this.route.snapshot.params;
    // const type = p['type'];

    // this.type = +this.route.snapshot.paramMap.get('type');
    this.route.paramMap.subscribe(param => {
      this.type = +param.get('type');
    });

    // this.name = this.route.snapshot.queryParamMap.get('name');
    this.route.queryParamMap.subscribe(param => {
      this.name = param.get('name');
    });
  }

}
