import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'ek-single-product',
  template: `
    <ion-card>
      <ion-grid>
        <ion-row>
          <ion-col col-4>
            <img [src]='product.imageUrl'>
          </ion-col>
          <ion-col col-8>
            <div class='product-description'>
              <div class='product-description__name'>
                <div>
                  <p>{{product.name}}</p>
                </div>
                <div *ngIf='showDelete'>
                  <button ion-button clear (click)='deleteProduct()'>
                    <ion-icon name='trash'></ion-icon>
                  </button>
                </div>
              </div>
              <div class='product-description__price'>
                <p>{{product.cost}}</p>
              </div>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card>
  `
})
export class SingleProductComponent {
  @Input() product: Product;
  @Input() showDelete: boolean;
  @Output() delete = new EventEmitter<Product>();

  deleteProduct() {
    this.delete.emit(this.product);
  }
}
