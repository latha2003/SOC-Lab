import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CourseslistComponent } from './courseslist/courseslist.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, ProductDisplayComponent, ProductDetailsComponent, CourseslistComponent]
})
export class AppComponent {
  title = 'product-app';

  showCourseslist = false;
  toggleCoursesList(){
    this.showCourseslist = !this.showCourseslist;
  }
}
