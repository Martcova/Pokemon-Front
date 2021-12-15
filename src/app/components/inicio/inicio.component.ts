
import { Component,OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnDestroy , OnInit {
  
  poke:any[] =[];
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();

  

  constructor(private dataservice:DataService) { }

  ngOnInit() :void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 4,
      language: {
        "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json"
      }
    };

    this.getPokemons();
    
    
  }


  ngOnDestroy(): void {
 
    this.dtTrigger.unsubscribe();
  }


getPokemons(){
 let pokemondata;

  for(let i=1; i<=50; i++){

    this.dataservice.getPokemons(i).subscribe(
      (data) => {
        pokemondata = {
          position:i,
          name:data.name,
          image:data.sprites.front_shiny,
          move:data.moves[3].move.name,
          type:data.types[0].type.name,
          stats:data.stats[0].base_stat,
        }
        this.poke.push(pokemondata);
       console.log(this.poke);
   if(i==50){ 
  
     this.dtTrigger.next();
   }
    
    });
   
  }

  
}



}
