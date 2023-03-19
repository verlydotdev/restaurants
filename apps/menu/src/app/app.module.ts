import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter, RouterModule, withEnabledBlockingInitialNavigation } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule],
  providers: [
    provideRouter(routes, withEnabledBlockingInitialNavigation())
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
