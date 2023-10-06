import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/core/interfaces/category';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{

  categoriesList: Category[] = [];

  constructor(private _productsService: ProductsService){}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this._productsService.getCategories().subscribe({
      next: res => {
        console.log(res.data);
        this.categoriesList = res.data;
      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 8
      },
    },
    nav: true
  }
}
