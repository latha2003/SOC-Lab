import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ProductDisplayComponent, ProductDetailsComponent]
})
export class AppComponent {
  title = 'product-app';
}
