import { Component } from '@angular/core';
import { FormParentComponent } from "./form-parent/form-parent.component";

@Component({
  selector: 'app-root',
  imports: [FormParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
