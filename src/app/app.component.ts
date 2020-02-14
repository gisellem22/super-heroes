import { Component, OnInit } from '@angular/core';
import { SuperheroesService } from './services/superheroes.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
heroes:any;
selected:any;
heroesImg:any;
  constructor(private superheroesService: SuperheroesService) { }

  ngOnInit() {
     this.superheroesService.getHeroesByName().subscribe(heroes => {
        this.heroes = heroes;
    console.log(this.heroes)
})
 this.superheroesService.getHeroesImg().subscribe(imgs => {
        this.heroesImg = imgs;
    console.log(this.heroesImg)
    })
}
selectedHero(heroe) {
  this.selected = heroe;
}
getImg(array, id) {
  console.log(array,id)
  let img;
  array.filter(heroe => {
    if (heroe.id === id) {
      img = heroe.url;
    }
  })
  return img;
}
  // byName() {
  //   this.superheroesService.getHeroesByName().subscribe(heroes => {
  //       this.heroe = heroes;
  //   console.log(this.heroe)
  //     })
  // }
}