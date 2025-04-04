import { Component } from '@angular/core';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { DeferComponent } from './defer/defer.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { LoadingComponent } from './loading/loading.component';
import { SwitchComponent } from "./switch/switch.component";
import { AdvancedDeferComponent } from './advanced-defer/advanced-defer.component';
import { ErrorComponent } from './error/error.component';

@Component({
  selector: 'app-root',
  imports: [IfComponent, ForComponent,
    DeferComponent, PlaceholderComponent, LoadingComponent, SwitchComponent,AdvancedDeferComponent,ErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-19-learning';
}
