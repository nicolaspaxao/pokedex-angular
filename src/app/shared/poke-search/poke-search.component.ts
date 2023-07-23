import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent {
  @Output() public emmitSearch = new EventEmitter();

  constructor() { }

  public search(val: string) {
    this.emmitSearch.emit(val);
  }
}
