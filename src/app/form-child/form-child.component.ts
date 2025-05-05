import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ItemForm } from '../form-parent/form-parent.component';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form-child',
  imports: [ReactiveFormsModule, CustomInputComponent, JsonPipe],
  templateUrl: './form-child.component.html',
  styleUrl: './form-child.component.scss',
})
export class FormChildComponent {
  formGroup = input.required<FormGroup<ItemForm>>();
}
