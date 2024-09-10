
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CourseslistComponent } from './courseslist/courseslist.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, ProductDisplayComponent, ProductDetailsComponent, CourseslistComponent]
})
export class AppComponent {
  title = 'product-app';
  parentData: string[] =["C", "C++", "Java", "Python", "Angular", "JavaScript"];
  showCourseslist = false;
  toggleCoursesList(){
    this.showCourseslist = !this.showCourseslist;
  }
}
