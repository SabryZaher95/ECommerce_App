import { Product } from '../../core/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit{

  allProducts: Product[] = [];
  constructor(private _products: ProductsService){}
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this._products.getProducts().subscribe({
      next: res => {
        console.log(res);
        this.allProducts = res.data;
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
