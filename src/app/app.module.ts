import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavBarSocialComponent } from './landing-page/nav-bar-social/nav-bar-social.component';
import { NavbarMenuComponent } from './landing-page/navbar-menu/navbar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavBarSocialComponent,
    NavbarMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
