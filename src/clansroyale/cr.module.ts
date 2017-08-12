import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { MaterialsModule } from './modules/materials/materials.module';
import { CrRoutingModule } from './cr.routing';

import { CrComponent } from './cr.component';
import { CrCardComponent } from './components/cr-card/cr-card.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { NewClanComponent } from './pages/new-clan/new-clan.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CrRoutingModule,
    MaterialsModule
  ],
  declarations: [
    CrComponent,
    CrCardComponent,
    HomeComponent,
    NewClanComponent,
    AboutComponent
  ],
  providers: [],
  bootstrap: [CrComponent]
})
export class CrModule { }
