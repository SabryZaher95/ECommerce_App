import { Category } from "./category";

export interface Product {
  id: string,
  imageCover: string,
  images?: string[],
  title: string,
  description: String,
  price: number,
  category: Category,
  ratingsAverage: number
}

