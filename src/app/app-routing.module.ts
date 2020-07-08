import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { SearchmovieComponent } from './searchmovie/searchmovie.component';
import { SearchComponent } from './searchmovie/search';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
     
    {path:'addmovie', component:AddmovieComponent},
     {path:'searchmovie',component:SearchmovieComponent,
        children:[
          {path:'searchmovie/search' ,component: SearchComponent}
        ]
     }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
