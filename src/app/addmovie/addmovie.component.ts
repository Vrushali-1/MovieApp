import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { Movies } from '../Movies';
import { FormGroup ,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  constructor(private ms:MovieserviceService) { }

  ngOnInit(): void {
  }

  movieForm= new FormGroup({
    moviesId:new FormControl(),
    moviesName: new FormControl('',
    [Validators.required,Validators.pattern("/^[a-z0-9]+$/")]),
    moviesRating: new FormControl('',
    [Validators.required,Validators.pattern("[1-5]")]),
    moviesGenre:new FormControl([Validators.required])
    
  })

  addMovie(moviesId,moviesName,moviesRating,moviesGenre){
    let movie:Movies;
    movie=new Movies(moviesId,moviesName,moviesRating,moviesGenre);
    return this.ms.addMovie(movie).subscribe();
  }

}
