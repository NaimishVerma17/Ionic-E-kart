export interface Product {
  id: string;
  userId: string;
  name: string;
  cost: number;
  category: Categories;
  description: string;
  imageUrl?: string
}

export enum Categories {
  CATEGORY_ELECTRONICS = 'electronics',
  CATEGORY_FURNITURE = 'furniture',
  CATEGORY_BOOKS = 'books',
  CATEGORY_VEHICLES = 'vehicles',
  CATEGORY_ACCESSORIES = 'accessories',
  CATEGORY_OTHER_HOUSEHOLDS = 'otherHouseHolds',
}
