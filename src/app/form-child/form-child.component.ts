import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ItemForm } from '../form-parent/form-parent.component';
import { CustomInputComponent } from '../custom-input/custom-input.component';

@Component({
  selector: 'app-form-child',
  imports: [ReactiveFormsModule, CustomInputComponent],
  templateUrl: './form-child.component.html',
  styleUrl: './form-child.component.scss',
})
export class FormChildComponent {
  formGroup = input.required<FormGroup<ItemForm>>();
}
