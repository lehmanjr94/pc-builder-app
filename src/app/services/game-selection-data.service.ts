import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Requirements } from '../classes/requirements';

@Injectable({
  providedIn: 'root'
})
export class GameSelectionDataService {

  private gameListSource = new BehaviorSubject<Array<number>>([]);
  currentGameList = this.gameListSource.asObservable();
  gameList: Array<number> = [];

  constructor() { }

  changeGameList(gameList: Array<number>) {
    this.gameListSource.next(gameList);
  }
}
