import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { LandingPageService } from 'src/app/services/landing-page.service';

@Component({
  selector: 'app-premieres',
  templateUrl: './premieres.component.html',
  styleUrls: ['./premieres.component.css']
})
export class PremieresComponent implements OnInit {

  premieres:Movie[] = [];

  constructor(public _landingService:LandingPageService) { }

  ngOnInit(): void {
    this.getPremieres();
  }
  getPremieres(){
    this._landingService.getMovies().subscribe(movies => {
      this.premieres = movies.filter(movie => movie.cartelera === false)
      console.log(this.premieres);
    })
  }

}
