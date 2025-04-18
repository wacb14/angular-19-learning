# Concepts to review

1. Hydration with @defer (SSR)

```html
@defer(on idle; hydrate on interaction){
    <app-component\>
}
```

2. Use of local storage or other browser elements with routes and SSR.

  -With `RenderMode.Client` we make it render that route just in client.
  -With `getPrerenderParams()` we pass the params in the SSR in the same way CSR.

```ts
export const serverRoutes:ServerRoutes[]=[
    {
        path:'**',
        renderMode: RenderMode.Prerender
    },
    {
        path:'/component',
        renderMode: RenderMode.Client
    }
    {
        path:'/component/:id',
        renderMode: RenderMode.Prerender,
        async getPrerenderParams(){
            dataService=inject(ProductService);
            const ids=await dataService.getIds();
            return ids.map(id=>({id}))
        }

    }
]
```

3. Event Replay - use to reproduce changes when hydrate a component.
4. Zoneless was removed (zone.js).
5. Hot module replacement (HMR) - still in test.
6. Standalone automatic.
7. Testing - Karma is longer used for testing.
  -Alternatives: Jest, Web test runner.
8. Security>AutoCSP:false - implemented to manage hashes for security in html files.
9. Script for migrating to reactivity in Angular (signals -> queries, inputs).

```bash
ng generate @angular/core:signal-input-migration
ng generate @angular/core:signal-queries-migration
ng generate @angular/core:signal-output-migration
```

All in One

```bash
ng generate @angular/core:signals
```

10. Signals
11. LinkedSignal
12. Resource (Experimental)
13. Computed
14. Angular Material is now easily customizable.
15. @let to create variables in the HTML.

  ```html
  @let user = user$ | async;
  <p>User: {{user.name}}</p>
  ```

16. Pipe async.