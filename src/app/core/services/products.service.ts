import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<any>{
    return this._http.get(environment.baseUrl + 'api/v1/products');
  }

  getProductDetails(prod_id:string): Observable<any>{
    return this._http.get(`${environment.baseUrl}api/v1/products/${prod_id}`);
  }

  getCategories():Observable<any>{
    return this._http.get(`${environment.baseUrl}api/v1/categories`)
  }
}
