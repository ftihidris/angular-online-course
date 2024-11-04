import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { IntroComponent } from '../intro/intro.component';
import { CoursesComponent } from '../courses/courses.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    IntroComponent, 
    CoursesComponent,
    FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
