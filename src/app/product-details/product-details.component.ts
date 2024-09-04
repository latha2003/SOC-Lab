import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productName: string = 'Super Widget';
  productCode: string = 'SWG1234';
  productPrice: number = 199.99;
  manufactureDate: Date = new Date(2024, 8, 4);
  productPriceEuro: number = 210;
}

