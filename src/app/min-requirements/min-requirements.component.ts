import { Component, OnInit } from '@angular/core';
import { GameSelectionDataService } from '../services/game-selection-data.service';
import { Requirements } from '../classes/requirements';
import { Requirement } from '../classes/requirement';
import { REQUIREMENTS } from '../mock-requirements';

@Component({
  selector: 'app-min-requirements',
  templateUrl: './min-requirements.component.html',
  styleUrls: ['./min-requirements.component.css']
})
export class MinRequirementsComponent implements OnInit {
  gameList: Array<number> = [];

  reqs: Requirements[] = REQUIREMENTS;
  currentReqs: Requirement[] = [
    {
      gameId: 0,
      cpuCores: 0,
      cpuSpeed: 0,
      gpuSpeed: 0,
      gpuRam: 0,
      ramCapacity: 0,
      ramSpeed: 0,
    }
  ];
  minReqs = this.currentReqs[0];


  constructor(private gameDataService: GameSelectionDataService) { }

  ngOnInit(): void {
    this.gameDataService.currentGameList.subscribe(gameList => this.gameList = gameList);
    this.determineRequirements();
  }

  determineRequirements() {
    for (let req of this.reqs) {
      if (this.gameList.includes(req.gameId)) {
        this.minReqs.cpuCores = Math.max(req.cpuCores, this.minReqs.cpuCores);
        this.minReqs.cpuSpeed = Math.max(req.cpuSpeed, this.minReqs.cpuSpeed);
        this.minReqs.gpuSpeed = Math.max(req.gpuSpeed, this.minReqs.gpuSpeed);
        this.minReqs.gpuRam = Math.max(req.gpuRam, this.minReqs.gpuRam);
        this.minReqs.ramCapacity = Math.max(req.ramCapacity, this.minReqs.ramCapacity);
        this.minReqs.ramSpeed = Math.max(req.ramSpeed, this.minReqs.ramSpeed);
      }
    }
    console.log(this.minReqs);
  }

  focus(component: any) {
    console.log(component);
  }

}
