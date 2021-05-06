import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationBarComponent } from './shared/components/layout/navigation-bar/navigation-bar.component';

import { HarmonicMainComponent } from './harmonic/harmonic-main/harmonic-main.component';
import { HomeComponent } from './harmonic/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HarmonicMainComponent,
    NavigationBarComponent,
    HomeComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
