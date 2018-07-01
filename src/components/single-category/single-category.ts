import { Component, Input } from "@angular/core";

@Component({
  selector: "ek-single-category",
  template: `
    <ion-card>
      <img [src]="categoryImageUrl"/>
      <ion-card-content>
        <ion-card-title text-center class="category-title">
          {{categoryTitle | uppercase}}
        </ion-card-title>
        <p text-center text-center class="category-description">
          {{categoryDescription}}
        </p>
      </ion-card-content>
    </ion-card>

  `
})
export class SingleCategoryComponent {
  @Input() categoryTitle;
  @Input() categoryDescription;
  @Input() categoryImageUrl;

  constructor() {

  }
}
