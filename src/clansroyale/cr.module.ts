import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { MaterialsModule } from './modules/materials/materials.module';

import { AppComponent } from './cr.component';
import { CrCardComponent } from './components/cr-card/cr-card.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule
  ],
  declarations: [
    AppComponent,
    CrCardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
