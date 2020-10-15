import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'The Will Will Web';

  keyword = 'demo1';

  data: any[] = [];

  constructor(private datasvc: DataService) {}

  ngOnInit(): void {
    this.datasvc.getArticles().subscribe(result => {
      this.data = result;
    });
  }

  doSearch(str: string): void {
    this.keyword = str;
  }

  deletePost(id: number): void {
    this.data = this.data.filter(value => value.id != id);
  }
}
