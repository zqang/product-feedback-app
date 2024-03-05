import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.css',
})
export class FormFieldComponent {
  @Input() label!: string;
  @Input() formControl!: FormControl;
}
