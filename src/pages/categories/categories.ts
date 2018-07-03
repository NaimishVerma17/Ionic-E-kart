import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { UploadItemPage } from "../upload-item/upload-item";
import { ProductRepository } from "../../repository/product.repository";
import { Categories } from "../../models/product.model";
import { CategoryProductsPage } from "../category-products/category-products";

@Component({
  selector: "page-categories",
  templateUrl: "categories.html",
})
export class CategoriesPage {
  categories = [
    {
      title: Categories.CATEGORY_ELECTRONICS,
      description: "You can find all items related to electronic world here in this category",
      imgUrl: "../../assets/imgs/category-electronics.jpeg"
    },
    {
      title: Categories.CATEGORY_BOOKS,
      description: "You can find new as well as second hand important books here in this category",
      imgUrl: "../../assets/imgs/category-book.jpeg"
    },
    {
      title: Categories.CATEGORY_FURNITURE,
      description: "All types of furniture either for house or for your small office is there in this category",
      imgUrl: "../../assets/imgs/category-furniture.jpeg"
    },
    {
      title: Categories.CATEGORY_VEHICLES,
      description: "You can find second hand bikes, bicycles, cars etc at very affordable rate in this category",
      imgUrl: "../../assets/imgs/category-vehicle.jpeg"
    },
    {
      title: Categories.CATEGORY_ACCESSORIES,
      description: "You can find all types of accessories either for mobile or for laptop or any other device in this category",
      imgUrl: "../../assets/imgs/category-accessories.jpeg"
    },
    {
      title: Categories.CATEGORY_OTHER_HOUSEHOLDS,
      description: "You can find all other household things under this category",
      imgUrl: "../../assets/imgs/category-household.jpeg"
    }
  ];

  constructor(private navCtrl: NavController) {
  }

  openUploadItem() {
    this.navCtrl.push(UploadItemPage);
  }

  visitCategory(event:string){
    console.log(event);
    this.navCtrl.push(CategoryProductsPage,{category:event});
  }
}
