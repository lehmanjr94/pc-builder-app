import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameSelectionComponent } from './game-selection/game-selection.component';
import { MinRequirementsComponent } from './min-requirements/min-requirements.component';
import { PartsIndexComponent } from './parts-index/parts-index.component';

const routes: Routes = [
  { path: 'selectgames', component: GameSelectionComponent },
  { path: 'minreqs', component: MinRequirementsComponent },
  { path: 'partsindex', component: PartsIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
