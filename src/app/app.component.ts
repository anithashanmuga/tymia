// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'web';
// }

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `<router-outlet></router-outlet>`,
	encapsulation: ViewEncapsulation.None
})
export class AppComponent {
	title = 'Web';
}
