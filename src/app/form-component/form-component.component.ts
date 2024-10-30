import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent {
  submit(login: any){
    console.log("Form submitted",login);
  }
}
