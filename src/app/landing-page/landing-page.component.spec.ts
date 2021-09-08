import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';

import { LandingPageComponent } from './landing-page.component';
import { MoviesFilterComponent } from './movies-filter/movies-filter.component';
import { NavBarSocialComponent } from './nav-bar-social/nav-bar-social.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { PremieresComponent } from './premieres/premieres.component';
import { SlidesComponent } from './slides/slides.component';
import { WeeklyBilboardsComponent } from './weekly-bilboards/weekly-bilboards.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        LandingPageComponent,
        CarouselComponent,
        FooterComponent,
        MoviesFilterComponent,
        NavbarMenuComponent,
        NavBarSocialComponent,
        PremieresComponent,
        SlidesComponent,
        WeeklyBilboardsComponent],
      imports:[
        HttpClientTestingModule,
        FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
