import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  @Input() i;

  @Input() item;

  @Output() delete = new EventEmitter<number>();

  constructor() { }

  doDelete(): void {
    this.delete.emit(this.item.id);
  }
}
