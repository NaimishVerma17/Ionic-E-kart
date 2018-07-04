import { Component } from "@angular/core";
import { ModalController, NavController, NavParams } from "ionic-angular";
import { ProductRepository } from "../../repository/product.repository";
import { Product } from "../../models/product.model";
import { ProductDetailsPage } from "../product-details/product-details";


@Component({
  selector: "page-category-products",
  templateUrl: "category-products.html",
})
export class CategoryProductsPage {

  category: string;
  products: Product[];

  constructor(private navParams: NavParams,
              private productRepo: ProductRepository,
              private modalCtrl: ModalController) {
    this.category = this.navParams.get("category");
    this.fetchProducts();
  }

  fetchProducts() {
    this.productRepo.getCategoryProducts(this.category).subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  showProduct(product: Product) {
    const productModal = this.modalCtrl.create(ProductDetailsPage,{product:product});
    productModal.present();
  }
}
