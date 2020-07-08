export class Movies{

    moviesId:number;
    moviesName:string;
    moviesRating:number;
    moviesGenre:string;

    

    constructor(moviesId,moviesName,moviesRating,moviesGenre){
        this.moviesId=moviesId;
        this.moviesName=moviesName;
        this.moviesRating=moviesRating;
        this.moviesGenre=moviesGenre;
    }
}