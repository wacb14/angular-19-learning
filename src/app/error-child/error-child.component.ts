import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-child',
  imports: [],
  templateUrl: './error-child.component.html',
  styleUrl: './error-child.component.scss',
})
export class ErrorChildComponent {
  constructor() {
    throw new Error('Simulated error');
  }
}
