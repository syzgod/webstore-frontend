import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	private http = inject(HttpClient);

	private apiUrl = 'http://localhost:5000/api/products';

	getProducts(): Observable<any> {
		return this.http.get(this.apiUrl);
	}

	createProduct(product: any): Observable<any> {
		return this.http.post(this.apiUrl, product);
	}
}
