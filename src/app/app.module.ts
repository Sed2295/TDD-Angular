import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavBarSocialComponent } from './landing-page/nav-bar-social/nav-bar-social.component';
import { NavbarMenuComponent } from './landing-page/navbar-menu/navbar-menu.component';
import { MoviesFilterComponent } from './landing-page/movies-filter/movies-filter.component';
import { SlidesComponent } from './landing-page/slides/slides.component';
import { WeeklyBilboardsComponent } from './landing-page/weekly-bilboards/weekly-bilboards.component';
import { PremieresComponent } from './landing-page/premieres/premieres.component';
import { CarouselComponent } from './landing-page/carousel/carousel.component';
import { FooterComponent } from './landing-page/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavBarSocialComponent,
    NavbarMenuComponent,
    MoviesFilterComponent,
    SlidesComponent,
    WeeklyBilboardsComponent,
    PremieresComponent,
    CarouselComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
