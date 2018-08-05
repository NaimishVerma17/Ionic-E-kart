import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductRepository } from '../../repository/product.repository';
import { LayoutServices } from '../../services/layout.services';


@Component({
  selector: 'page-uploaded-items',
  templateUrl: 'uploaded-items.html',
})
export class UploadedItemsPage {

  products: Product[];

  constructor(private productRepo: ProductRepository,
              private layoutService: LayoutServices) {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productRepo.getLoggedInUserProducts().subscribe(products => this.products = products);
  }

  deleteProduct(product: Product) {
    console.log(product);
    this.productRepo.deleteProduct(product).subscribe(status => {
      if (status)
        this.layoutService.showToast('Product deleted succesfully');
      else
        this.layoutService.showToast('Product deletion failed');
    })
  }


}
