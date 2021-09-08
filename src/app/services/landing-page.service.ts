import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SocialNetwork } from '../landing-page/nav-bar-social/social-network';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
  apiRedes:string = 'RedesSociales.json';
  apiPeliculas:string = 'Peliculas.json';
  formatos: string [] = ['Doblada 2D','Doblada 3D','Idioma original 2D','Idioma original 3D'];
  horas: string[] = [];

  constructor(public _http: HttpClient) {
    this.generateHours()
  }

  getSocialNetworks():Observable<SocialNetwork[]>{
    return this._http.get<SocialNetwork[]>(`${environment.API}${this.apiRedes}`)
  }
  getMovies():Observable<Movie[]>{
    return this._http.get<Movie[]>(`${environment.API}${this.apiPeliculas}`)
  }
  generateHours(){
    for(let i=2; i<=10; i = i+2){
      let hora = `${i}:00pm`
      console.log(hora);
      this.horas.push(hora)
    }
  }
}
