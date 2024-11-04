import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { IntroComponent } from "./intro/intro.component";
import { CoursesComponent } from "./courses/courses.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root', //identify particular componenet in parent component
  standalone: true, //
  imports: [RouterOutlet, NavbarComponent, IntroComponent, CoursesComponent, FooterComponent],
  templateUrl: './app.component.html', //url for extrernal tempalte for the view
  styleUrl: './app.component.css', //url for stylesheet
  providers: [], //certain sertvice can be register in component
})
export class AppComponent {
  title = 'angular-online-course';
}
