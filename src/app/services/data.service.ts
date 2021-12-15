import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url :string = "https://pokeapi.co/api/v2/"
  constructor(private http: HttpClient) { }


   //metodo todos los pokemon (vista)
   getPokemons(id:number){
    return this.http.get<any>(`${this.url}pokemon/${id}`);
  }

  
     
}
