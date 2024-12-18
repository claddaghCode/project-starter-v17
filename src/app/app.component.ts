import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-converter></app-converter>
  `,
  styles: ``,
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
