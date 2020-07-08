import {Component} from '@angular/core';

@Component({
    selector : 'search',
    template : `<hr>
    <h3>Table</h3>
    <table border="20px">
       <tr *ngFor="let movie of localmovies" style="margin-bottom: 10px;">
           <td>{{movie.moviesId}}</td><td>{{movie.moviesName}}</td><td>{{movie.moviesRating}}</td>
        </tr>
    </table>
    `
})
export class SearchComponent{

}