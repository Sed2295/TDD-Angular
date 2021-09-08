import { Component, OnInit } from '@angular/core';
import { LandingPageService } from 'src/app/services/landing-page.service';
import { SocialNetwork } from './social-network';

@Component({
  selector: 'app-nav-bar-social',
  templateUrl: './nav-bar-social.component.html',
  styleUrls: ['./nav-bar-social.component.css']
})
export class NavBarSocialComponent implements OnInit {
  socialNetworks: SocialNetwork[] = []
  constructor(public _landingService:LandingPageService) { }

  ngOnInit(): void {
    this.getSocial()
  }
  getSocial(){
    this._landingService.getSocialNetworks().subscribe((redes) => {
      this.socialNetworks = redes;
      console.log(this.socialNetworks)
    })
  }

}
