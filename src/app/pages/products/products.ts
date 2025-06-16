import { Component } from '@angular/core';
import { Product, ProductsService } from '../../services/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})

export class ProductsComponent {
  products: Product[] = [];
  selectedProduct: Product | null = null; // para el modal
  isModalOpen: boolean = false;

  constructor(private productsService: ProductsService) {
    this.products = this.productsService.getProducts();
  }

  openModal(product: Product): void {
    this.selectedProduct = product;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.selectedProduct = null;
    this.isModalOpen = false;
  }
}