import { Component } from '@angular/core';

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
categories=[
  {
    title:'Electronics',
    description:'You can find all items related to electronic world here in this category',
    imgUrl:"../../assets/imgs/category-electronics.jpeg"
  },
  {
    title:'Books',
    description:'You can find new as well as second hand important books here in this category',
    imgUrl:"../../assets/imgs/category-book.jpeg"
  },
  {
    title:'Furniture',
    description:'All types of furniture either for house or for your small office is there in this category',
    imgUrl:"../../assets/imgs/category-furniture.jpeg"
  },
  {
    title:'Vehicles',
    description:'You can find second hand bikes, bicycles, cars etc at very affordable rate in this category',
    imgUrl:"../../assets/imgs/category-vehicle.jpeg"
  },
  {
    title:'Accessories',
    description:'You can find all types of accessories either for mobile or for laptop or any other device in this category',
    imgUrl:"../../assets/imgs/category-accessories.jpeg"
  },
  {
    title:'Other households',
    description:'You can find all other household things under this category',
    imgUrl:"../../assets/imgs/category-household.jpeg"
  }
]
}
