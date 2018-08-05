import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ek-single-category',
  template: `
    <ion-card>
      <img [src]='categoryImageUrl'/>
      <ion-card-content>
        <ion-card-title text-center class='category-title'>
          {{categoryTitle | uppercase}}
        </ion-card-title>
        <p text-center class='category-description'>
          {{categoryDescription}}
        </p>
        <p text-end class='visit-category' (click)='visitCategory()'>
          <u>Visit</u>
        </p>
      </ion-card-content>
    </ion-card>

  `
})
export class SingleCategoryComponent {
  @Input() categoryTitle: string;
  @Input() categoryDescription: string;
  @Input() categoryImageUrl: string;
  @Output() visit = new EventEmitter();

  constructor() {

  }

  visitCategory() {
    this.visit.emit(this.categoryTitle);
  }
}
