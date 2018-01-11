import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="nav">
      <a routerLink="password" class="nav__link">password</a>
      <a routerLink="version-manager" class="nav__link">version-manager</a>
      <a routerLink="calculator" class="nav__link">calculator</a>
    </nav>
  `,

})
export class HeaderComponent {
}
