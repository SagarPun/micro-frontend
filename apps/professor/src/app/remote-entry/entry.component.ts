import { Component } from '@angular/core';

@Component({
  selector: 'ng-mfe-professor-entry',
  template: `<div class="remote-entry">
    <h2>professor's Remote Entry Component</h2>
    <a routerLink="test">Test</a>
    <router-outlet></router-outlet>
  </div>`,
  styles: [],
})
export class RemoteEntryComponent {}
