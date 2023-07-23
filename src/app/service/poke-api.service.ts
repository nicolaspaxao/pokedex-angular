import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';

  constructor(private http: HttpClient) { }

  get apiListAllPokemons(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`).pipe(
      tap(result => result),
      tap(result => {
        result.results.map((resPokemons: any) => {
          this.apiGetPokemons(resPokemons.url).subscribe({
            next: (status) => resPokemons.status = status,
          });
        });
      }),
    );
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map(res => res));
  }
}
