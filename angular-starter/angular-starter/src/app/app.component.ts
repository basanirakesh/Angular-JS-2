import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<ul>
  <li><a routerLink="">Home</a></li>
  <li><a routerLink="messages">Messages</a></li>
  <li><a routerLink="photos">Photos</a></li>
</ul>
Page Loads Here..
<router-outlet></router-outlet>

`
})
export class AppComponent {
}