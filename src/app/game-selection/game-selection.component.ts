import { Component, OnInit } from '@angular/core';
import { Game } from '../classes/game';
import { GAMES } from '../mock-games';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { GameSelectionDataService } from '../services/game-selection-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-selection',
  templateUrl: './game-selection.component.html',
  styleUrls: ['./game-selection.component.css']
})
export class GameSelectionComponent implements OnInit {

  games: Game[] = GAMES;
  gameList: Array<number> = [];

  constructor(private router: Router, private gameDataService: GameSelectionDataService) { }

  ngOnInit(): void {
    this.gameDataService.currentGameList.subscribe(gameList => this.gameList = gameList);
  }

  toggleSelection(game: Game) {
    game.active = !game.active;
  }

  confirm() {
    this.gameList = [];
    for (let game of this.games) {
      if (game.active && game.id) {
        this.gameList.push(game.id);
      }
    }
    this.gameDataService.changeGameList(this.gameList);
    this.router.navigate(['partsindex'])
  }
}
