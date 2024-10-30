import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { IntroComponent } from "./Components/intro/intro.component";
import { CoursesComponent } from "./Components/courses/courses.component";
import { FooterComponent } from "./Components/footer/footer.component";


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
