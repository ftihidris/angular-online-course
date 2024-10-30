import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextcomponentComponent } from "./textcomponent/textcomponent.component";
import { ImagecomponentComponent } from "./imagecomponent/imagecomponent.component";
import { EmpInfoComponent } from "./emp-info/emp-info.component";
import { FormComponentComponent } from "./form-component/form-component.component";
import { EInfoComponent } from "./e-info/e-info.component";

@Component({
  selector: 'app-root', //identify particular componenet in parent component
  standalone: true, //
  imports: [RouterOutlet, TextcomponentComponent, ImagecomponentComponent, EmpInfoComponent, FormComponentComponent, EInfoComponent],
  templateUrl: './app.component.html', //url for extrernal tempalte for the view
  styleUrl: './app.component.css', //url for stylesheet
  providers: [], //certain sertvice can be register in component
})
export class AppComponent {
  title = 'angular-online-course';
}
