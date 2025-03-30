import { Component } from '@angular/core';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { DeferComponent } from './defer/defer.component';

@Component({
  selector: 'app-root',
  imports: [IfComponent,ForComponent,
    DeferComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-19-learning';
}
