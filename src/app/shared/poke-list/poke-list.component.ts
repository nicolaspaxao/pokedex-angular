import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  private setPokeList: any;
  public pokeList: any;
  public apiError: boolean = false;

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    if (this.setPokeList == null)
      this.pokeApiService.apiListAllPokemons.subscribe({
        next: (res => {
          this.setPokeList = res.results;
          this.pokeList = this.setPokeList;
        }),
        error: (error) => { this.apiError = true }
      });
  }

  public search(event: any) {
    const filter = this.setPokeList.filter((res: any) => {
      return !res.name.indexOf(event.toLowerCase())
    });

    this.pokeList = filter;
  }
}
