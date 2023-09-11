import { Category } from "./category";

export interface Product {
  imageCover: string,
  title: string,
  price: number,
  category: Category,
  ratingsAverage: number
}

