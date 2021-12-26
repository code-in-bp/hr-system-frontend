import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-flex">
    <!-- Header -->
    <div class="wrapper">
    <app-header-component></app-header-component>
    <app-content-component></app-content-component>
    <router-outlet></router-outlet>
    <div class="clear"></div>
    <app-footer-component></app-footer-component>
    <!-- Footer -->
    </div>
    
  </div>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'frontend-v1';

}
