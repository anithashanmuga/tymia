import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { NgxPageScrollModule } from 'ngx-page-scroll';
// import { AgmCoreModule } from '@agm/core';

// // This Module's Components
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
	{ path: '', component: LayoutComponent, pathMatch: 'full' },
];

@NgModule({
	imports: [
		// NgxPageScrollModule,
		RouterModule.forChild(routes),
		// AgmCoreModule.forRoot({
		// 	apiKey: 'AIzaSyAAb9WPbGIDwuJEya0uj2M-n7wIFC9q_Y24',
		// 	libraries: ['places']
		// }),
	],
	declarations: [
		LayoutComponent,
		HeaderComponent,
		HomeComponent,
		AboutComponent,
		ServicesComponent

	],
	exports: [
		LayoutComponent,
	]
})
export class LayoutModule {
	static routes = routes;
}