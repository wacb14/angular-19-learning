import { Component, OnInit } from '@angular/core';
import { ErrorChildComponent } from '../error-child/error-child.component';

@Component({
  selector: 'app-error',
  imports: [ErrorChildComponent],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
})
export class ErrorComponent implements OnInit {
  isContentReady = true;
  isContentReadyError = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isContentReadyError = true;
    }, 5000);
  }

  work(){
    alert('The app is still working!')
  }
}
