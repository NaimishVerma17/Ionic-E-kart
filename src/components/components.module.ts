import {NgModule} from '@angular/core';
import {ToolbarComponent} from './toolbar/toolbar';
import {SingleCategoryComponent} from './single-category/single-category';
import {IonicModule} from "ionic-angular";

@NgModule({
  declarations: [
    ToolbarComponent,
    SingleCategoryComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    ToolbarComponent,
    SingleCategoryComponent
  ]
})
export class ComponentsModule {
}
