import {NgModule} from '@angular/core';
import {ToolbarComponent} from './toolbar/toolbar';
import {SingleCategoryComponent} from './single-category/single-category';
import {IonicModule} from "ionic-angular";
import { SingleProductComponent } from './single-product/single-product';

@NgModule({
  declarations: [
    ToolbarComponent,
    SingleCategoryComponent,
    SingleProductComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    ToolbarComponent,
    SingleCategoryComponent,
    SingleProductComponent
  ]
})
export class ComponentsModule {
}
