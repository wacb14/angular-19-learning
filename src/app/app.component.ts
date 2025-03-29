import { Component } from '@angular/core';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';

@Component({
  selector: 'app-root',
  imports: [IfComponent,ForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-19-learning';
}
