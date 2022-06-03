import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameSelectionComponent } from './game-selection/game-selection.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { MinRequirementsComponent } from './min-requirements/min-requirements.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PartsIndexComponent } from './parts-index/parts-index.component';
import { GpuComponent } from './parts-index/gpu/gpu.component';
import { CpuComponent } from './parts-index/cpu/cpu.component';
import { SummaryComponent } from './parts-index/summary/summary.component';
import { RamComponent } from './parts-index/ram/ram.component';
import { PsuComponent } from './parts-index/psu/psu.component';
import { CaseComponent } from './parts-index/case/case.component';
import { MonitorComponent } from './parts-index/monitor/monitor.component';
import { KeyboardComponent } from './parts-index/keyboard/keyboard.component';
import { MouseComponent } from './parts-index/mouse/mouse.component';

@NgModule({
  declarations: [
    AppComponent,
    GameSelectionComponent,
    HeaderComponent,
    MinRequirementsComponent,
    SidebarComponent,
    PartsIndexComponent,
    GpuComponent,
    CpuComponent,
    SummaryComponent,
    RamComponent,
    PsuComponent,
    CaseComponent,
    MonitorComponent,
    KeyboardComponent,
    MouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
