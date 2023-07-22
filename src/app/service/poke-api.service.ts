import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon';
  private offSet: string = '?offset=0&limit=100';

  constructor(private http: HttpClient) { }

  get apiListAllPokemons(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${this.offSet}`).pipe(
      tap(
        res => res
      ),
      tap(res => {
        console.log(res)
      })
    );
  }
}
