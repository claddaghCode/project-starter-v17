import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello {{name}}!</h1>
    <p>
      app works!
    </p>
  `,
  styles: ``,
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
