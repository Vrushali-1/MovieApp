import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Movies } from './Movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  constructor(private http:HttpClient) { }

   urladd: string="http://localhost:8888/addmovie";
   urlsearch:string="http://localhost:8888/movies/";

   addMovie(movie:Movies):Observable<Movies>{
   
    return this.http.post<Movies>(this.urladd,movie);
   }

   searchMovie(moviesGenre:String):Observable<Movies>{
    return this.http.get<Movies>(this.urlsearch +moviesGenre);
   }
}
