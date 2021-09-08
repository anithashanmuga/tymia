// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

export const ROUTES: Routes = [
  // { path: '', redirectTo: 'app', pathMatch: 'full'},
  { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)},
  // { path: 'nav', loadChildren: './layout/nav/nav.component' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
