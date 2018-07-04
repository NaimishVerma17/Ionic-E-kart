import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ProductRepository } from "../../repository/product.repository";
import { LayoutServices } from "../../services/layout.services";

@Component({
  selector: "page-upload-item",
  templateUrl: "upload-item.html",
})
export class UploadItemPage {

  formGroup: FormGroup;
  name: FormControl;
  category: FormControl;
  description: FormControl;
  cost: FormControl;

  constructor(private productRepo: ProductRepository, private layoutService: LayoutServices) {
    this.name = new FormControl("", [Validators.required]);
    this.category = new FormControl("", [Validators.required]);
    this.description = new FormControl("", [Validators.required]);
    this.cost = new FormControl("", [Validators.required]);
    this.formGroup = new FormGroup({
      "name": this.name,
      "category": this.category,
      "description": this.description,
      "cost": this.cost
    });
  }

  addProduct() {
    console.log(this.formGroup.value);
    this.productRepo.addProduct(this.formGroup.value).subscribe(status => {
      if (status) {
        this.layoutService.showToast("Product added successfully!");
        this.formGroup.reset();
      } else {
        this.layoutService.showToast("Something went wrong, please try again!");
      }
    });
  }
}
