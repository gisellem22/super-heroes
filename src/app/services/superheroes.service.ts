import { Injectable } from '@angular/core';

import { HttpClient ,HttpHeaders  } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { Heroes } from '../models/heroes';
import { heroesList } from '../heroes-list'
import { heroesImg } from '../heroes-img'

@Injectable()
export class SuperheroesService {

  url: string = "https://superheroapi.com/api/"
  key: string = "3483480741725426";
  heroes: any;

  
  constructor(private http: HttpClient) { }

  getHeroesByName(): Observable<any> {
    return of(heroesList);

    // return this.http.get<any>(this.url +this.key +"/search/"+name,      {
    //     headers:
    //       new HttpHeaders(
    //         {
    //           'Content-Type': 'application/json',
    //           'X-Requested-With': 'XMLHttpRequest',
    //           'Accept-Encoding' : 'gzip, deflate, br',
    //           'Accept' : 'no-cache'
    //         }
    //       )
    //   })
  }
  getHeroesImg(): Observable<any> {
    return of(heroesImg);
    }

}