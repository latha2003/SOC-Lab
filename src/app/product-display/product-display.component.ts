import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css'],
  standalone: true,  
  imports: [CommonModule]  
})
export class ProductDisplayComponent {
  productCode: string = 'PRODUCT1';
  productName: string = 'Laptop';
}
