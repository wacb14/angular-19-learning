# Angular Elements

Angular

- It's not just a framework, it's a structural platform.
- It's a group of frameworks (Angular Universal, Express, TypeScript, Angular Material).
- It gives functionality to something that doesn't have it.

## Components

A component is a MINIMUM logical unit => handles only one thing at a time.

- Example: Login
  - Render list of characters
  - Character
    - Delete
    - Edit
      - Validate correct data
      - Send data

### Container / presentational pattern

- Presentational: Component used to render data and manage the user interface.
- Container: Component that handles business logic and communication with external entities.

```ts
// Container component
@Component({
    standalone:true,
    selector:'app-user-container',
    template:"<app-user-profile [userName]='UserNameSignal()'/>",
    imports: [UserProfileComponent]
})

export class UserContainerComponent{
    userService:inject(UserService);
    userNameSignal =  this.userService.userNameSignal;
}
```

```ts
// Presentational component
@Component({
    standalone:true,
    selector:'app-user-profile',
    template:"<div [style]='{color:red}'>{{userName}}</div>"
})

export class UserProfileComponent{
    userName:string = "Gentleman"
}
```

Note: **Standalone components doesn't need a module to work**

## Modules

A module is a group of components and directives, like a box that contains everything necessary for a functionality. **But now in Angular 19 each component is its own Module**

## Directives

Give an extra functionality to something that didn't have it before.

### Structural directives

```html
<div *ngIf></div>
<div *ngFor></div>
```

### Attribute directives

```html
<div [ngClass]="{'active':isActive}"></div>
```

```ts
// Structural Directive
@Directive({
    standalone:true,
    selector:'[appShowOnScreenSize]'
})
export class appShowOnScreenSizeDirective implements OnInit{
    @Input() appShowOnScreenSize: 'small' | 'medium'|'large';

    constructor
    (
        private templateRef: TemplateRef<any>,
        private viewContainer:ViewContainerRef
    ){}

    ngOnInit(){
        this.updateView();
        window.addEventListener('resize', this.updateView.bind(this))
    }

    private updateView(){
        const width = window.innerWidth;

        this.viewContainer.clear();

        if(this.shouldShowContent(width)){
            this.viewContainer.createEmbeddedView(this.templateRef)
        }
    }

    private shouldShowContent(width:number):boolean{
        if(this.appShowOnScreenSizeDirective==='small' && width<600){
            return true;
        }
        if(this.appShowOnScreenSizeDirective==='medium' && width>=600 && width<1024){
            return true;
        }
        if(this.appShowOnScreenSizeDirective==='small' && width>=1024){
            return true;
        }
        return false;
    }
}
```

```html
<div *appShowOnScreenSize="'small'">Content for small displays</div>
```

```ts
// Attribute directive
@Directive({
    standalone:true,
    select:"[appHighlight]"
})
export class HighlightDirective{
    constructor(private el:ElementRef, private renderer:Renderer2){}

    @HostListener('mouseenter') onMouseEnter(){
        this.renderer.setStyle(this.el.nativeElement, "background-color", "yellow");
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.renderer.removeStyle(this.el.nativeElement, "background-color");
    }
}
```

```html
<p appHighlight>Drag the mouse over this text to highlight its content</p>
```

## Services

- Used to handle business logic (sometimes).
- Used to connect to external entities.
- Used to share information.
- SINGLETON => There is a single instance of the service.
  - That single instance is shared throughout the app and its information as well.

### Types of Providers

```ts
// providedIn: 'root' => Means that there is only one instance in the whole app.

@Injectable({
    providedIn:'root'
})
export class AuthService{

    isAuthenticated:boolean = false;

    changeAuthentication(){
        this.isAuthenticated = true;
    }

    login(){
        console.log('User not authenticated')
    }
}
```

```ts
// providedIn: 'any' => Means that the service will be injected in the closest module that requests it the first time.

@Injectable({
    providedIn:'any'
})
export class LoggingService{
    log(message:string){
        console.log('Log: ', message)
    }
}
```

```ts
// In this way we use the service only for this component and its descendants.
@Component({
    selector:'app-local',
    template: "<p> Component's content</p>"
    providers:[LocalService]
})
export class LocalComponent{
    localService = inject(LocalService);
}
```

### Provider configuration options

```ts
// useClass
// To exchange the use of providers
// Used when you need to provide a concrete implementation of a class (useful for interfaces or abstract classes).
@Injectable()
export class MockDataService{
    getData(){
        return 'Mock Data'
    }
}
@Injectable()
export class RealDataService{
    getData(){
        return 'Real data'
    }
}
@Component({
    standalone:true,
    selector:'app-root',
    template:`<p>{{data}}</p>`,
    providers:[{provide:MockDataService, useClass:RealDataService}]// Replaces the instance of mockDataService by RealDataService
})
export class AppComponent{
    data:string;
    dataService= inject(MockDataService);
    data = this.dataService.getData();
}
```

```ts
// useValue
// It is used to inject constant values, configuration objects or even functions.
const CONFIG = {apiUrl: 'https://api.example.com'}
@Component({
    standalone:true,
    selector:'app-config',
    template:`<p>{{config.apiUrl}}</p>`,
    providers:[{
        provide:"CONFIG", useValue:{apiUrl:'https://rickandmorty.com'}
    }]
})
export class ConfigComponent{}
```

```ts
// useFactory
// When you need complex logic to create the instance (similar to the Factory pattern in OOP).
@Injectable()
export class DataService{
    apiUrl:string='';
}
export function dataServiceFactory(){
    const apiUrl =  window.location.hostname==='localhost'?'https://localhost:3000':'https://rickandmorty.com'
    return new DataService(apiUrl);
}

@Component({
    standalone:true,
    selector:'app-root',
    template:`<p>{{data}}</p>`,
    providers:[{provide:DataService, useFactory:DataServiceFactory}]
})
export class AppComponent{
    dataService= inject(DataService);
    data = this.dataService.apiUrl;
}
```

```ts
// useExisting
// When you want a token to resolve to an existing instance (similar to the Adapter pattern).
@Injectable()
export class BaseService{
    getData(){
        return 'Base data';
    }
}
@Injectable()
export class DerivedService{
    baseService = inject(BaseService)
    getData(){
        return this.baseService.getData()+'-derived';
    }
}

@Component({
    standalone:true,
    selector:'app-root',
    template:`<p>{{data}}</p>`,
    providers:[{provide:DerivedService, useExisting:BaseService }]
})
export class AppComponent{
    derivedService= inject(DerivedService);
    data = this.derivedService.getData();
}
```
