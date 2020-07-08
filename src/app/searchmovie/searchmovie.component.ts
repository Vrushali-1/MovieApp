import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-searchmovie',
  templateUrl: './searchmovie.component.html',
  styleUrls: ['./searchmovie.component.css']
})
export class SearchmovieComponent implements OnInit {

  localmovies:any;
  constructor(private ms:MovieserviceService) {
      this.localmovies=[];
   }

  

  ngOnInit(): void {
  }
  

  
  searchMovie(moviesGenre:string){
      this.ms.searchMovie(moviesGenre).subscribe(
        (data:any)=>{
          this.localmovies=data;
        }
      );
  }
  

}
