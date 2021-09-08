import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { LandingPageService } from 'src/app/services/landing-page.service';

import { NavBarSocialComponent } from './nav-bar-social.component';
import { SocialNetwork } from './social-network';

describe('NavBarSocialComponent', () => {
  let component: NavBarSocialComponent;
  let fixture: ComponentFixture<NavBarSocialComponent>;
  let service: LandingPageService;
  let mockResponse: SocialNetwork[] = [
  {
    "clase": "fab fa-facebook-square",
    "estado": true,
    "nombre": "Facebook",
    "url": "fb.com/jhonathanplata"
  },
  {
    "clase": "fab fa-twitter",
    "estado": true,
    "nombre": "twitter",
    "url": "twitter.com/jhonathanplata"
  },
  {
    "clase": "fab fa-youtube",
    "estado": true,
    "nombre": "youtube",
    "url": "https://www.youtube.com/channel/UCggJ-K53CaDgIeZ4grI_ILw"
  },
  {
    "clase": "fab fa-instagram",
    "estado": true,
    "nombre": "instagram",
    "url": "https://www.instagram.com/alfredocabrera95/"
  }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarSocialComponent ],
      providers: [LandingPageService],
      imports: [HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarSocialComponent);
    component = fixture.componentInstance;
    service = component._landingService;
    fixture.detectChanges()
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy()
  });
  it('Debe inyectar la landingPageService', () => {
    expect(service).toBeTruthy();
  })
  it('Debe de llenar la variable socialNetworks al llamar getSocialNetworks', () => {
    spyOn(service, 'getSocialNetworks').and.returnValue(of(mockResponse))
    component.ngOnInit()
    expect(component.socialNetworks).toEqual(mockResponse)
  })
  it('Debe llamar el metodo getSocialNetworks() en el ngOninit', () => {
    spyOn(component, 'getSocial').and.callThrough()
    component.ngOnInit()
    expect(component.getSocial).toHaveBeenCalled()
  })
});
