import { Component } from '@angular/core';

@Component({
  selector: 'app-defer',
  imports: [],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss',
})
export class DeferComponent {
  // Allows deferred loading of content based on a condition.
  // Improves performance through lazy loading, i.e. delays loading of non-critical resources until they are needed.

  isVisible = false;

  chargeImage() {
    this.isVisible = true;
  }
}
