import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HarmonicMainComponent } from './harmonic';
import { HomeComponent } from './harmonic';

import { PageNotFoundComponent } from './shared/components';

const routes: Routes = [
  { path: '', redirectTo: 'harmonic', pathMatch: 'full' },
  {
    path: 'harmonic', component: HarmonicMainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
