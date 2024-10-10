import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  gameList: string[] = ["Mario Kart", "Minecraft", "Fortnite"];
  item: string = '';

  addItems() {
    this.gameList.push(this.item);
  }

  deleteGame(index: number) {
    this.gameList.splice(index, 1);
  }
}
