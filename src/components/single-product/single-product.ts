import { Component, Input } from "@angular/core";

@Component({
  selector: "ek-single-product",
  template: `
    <ion-card>
      <ion-grid>
        <ion-row>
          <ion-col>
            <img src="../../assets/imgs/category-book.jpeg">
          </ion-col>
          <ion-col>
            <div class="product-description">
              <div class="product-description__name">
                <p>{{productName}}</p>
              </div>
              <div class="product-description__price">
                <p>{{productPrice}}</p>
              </div>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card>
  `
})
export class SingleProductComponent {
  @Input() productName: string;
  @Input() productPrice: string;
  @Input() productImg: string;
}
