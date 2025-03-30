import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {
  isLoaded = false;

  constructor() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 3000);
  }
}
