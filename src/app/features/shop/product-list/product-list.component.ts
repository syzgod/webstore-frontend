import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { TableModule } from 'primeng/table';
import { CurrencyPipe } from '@angular/common';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss'],
	imports: [TableModule, CurrencyPipe],
	standalone: true
})
export class ProductListComponent implements OnInit {
	products: any[] = [];

	constructor(private productService: ProductService) {}

	ngOnInit(): void {
		this.productService.getProducts().subscribe(data => {
			this.products = data;
		});
	}
}
