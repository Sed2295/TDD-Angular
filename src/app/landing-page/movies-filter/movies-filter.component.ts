import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { LandingPageService } from 'src/app/services/landing-page.service';
declare var $:any;
@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.css']
})
export class MoviesFilterComponent implements OnInit {
  
  fechas:Date[] = [];
  formFilter = {
    date: new Date(),
    pelicula: ''
  }
  movies: Movie[] = [];
  horas: string[] = [];
  formatos: string[] = [];

  constructor(public _landingService:LandingPageService) { }

  ngOnInit(): void {
    $('select').formSelect();
    this.createDates();
    this.getMovies();
    this.horas = this._landingService.horas
    this.formatos = this._landingService.formatos
  }
  createDates(){
    for(let i=0; i<=6; i++){
      let date:Date = new Date()
      //Obtenemos los 7 dias apartir de hoy
      date.setDate(date.getDate()+i)
      this.fechas.push(date)
    }
    console.log(this.fechas)
  }
  getMovies(){
    this._landingService.getMovies().subscribe(movies => {
      this.movies = movies.filter(movie => movie.cartelera === true)
    })
  }

}
