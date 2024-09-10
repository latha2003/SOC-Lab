import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-courseslist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courseslist.component.html',
  styleUrl: './courseslist.component.css'
})
export class CourseslistComponent {
  @Input()
  data!: string[];
}
