import { Component } from '@angular/core';
import { IfComponent } from './if/if.component';

@Component({
  selector: 'app-root',
  imports: [IfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-19-learning';
}
