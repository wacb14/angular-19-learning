import { Component } from '@angular/core';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { DeferComponent } from './defer/defer.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { LoadingComponent } from './loading/loading.component';

@Component({
  selector: 'app-root',
  imports: [IfComponent,ForComponent,
    DeferComponent,PlaceholderComponent, LoadingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-19-learning';
}
