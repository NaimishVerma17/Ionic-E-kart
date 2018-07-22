import { Component } from '@angular/core';
import { Product } from "../../models/product.model";
import { ProductRepository } from "../../repository/product.repository";


@Component({
  selector: 'page-uploaded-items',
  templateUrl: 'uploaded-items.html',
})
export class UploadedItemsPage {

  products: Product[];

  constructor(private productRepo: ProductRepository) {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productRepo.getLoggedInUserProducts().subscribe(products => this.products = products);
  }

  deleteProduct(product:Product){
    console.log(product);
  }


}
