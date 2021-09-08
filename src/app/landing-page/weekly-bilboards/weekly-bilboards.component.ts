import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { LandingPageService } from 'src/app/services/landing-page.service';

@Component({
  selector: 'app-weekly-bilboards',
  templateUrl: './weekly-bilboards.component.html',
  styleUrls: ['./weekly-bilboards.component.css']
})
export class WeeklyBilboardsComponent implements OnInit {
  weeklyMovies:Movie[] = [];

  constructor(public _landingService:LandingPageService) { }

  ngOnInit(): void {
    this.getWeeklyBilboards();
  }
  getWeeklyBilboards(){
    this._landingService.getMovies().subscribe((movies) => {
      this.weeklyMovies = movies.filter(pelicula => pelicula.cartelera === true )
      console.log(this.weeklyMovies);
    })
  }

}
