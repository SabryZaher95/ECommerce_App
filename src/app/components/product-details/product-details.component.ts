import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/app/core/interfaces/product';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  productId: string = '';
  productDetails: Product = {} as Product;

  constructor(private _activatedRoute: ActivatedRoute, private _productsService: ProductsService){}
  ngOnInit(): void {
    /*this._activatedRoute.paramMap.subscribe({
      next: (res:any) => {
        console.log(res.id);
        this.productId = res.id;
      },
      error: err => console.log(err)
    })*/
    this.getProductId();
  }

  getProductId(){
    this.productId = this._activatedRoute.snapshot.paramMap.get("id")!;
    this.getProductDetails();
  }

  getProductDetails(){
    this._productsService.getProductDetails(this.productId).subscribe({
      next: data => {
        console.log(data.data);
        this.productDetails = data.data;
      },
      error: err => console.log(err)
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: false
  }

}
