import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Modules
import { MaterialsModule } from './modules/materials/materials.module';
import { CrRoutingModule } from './cr.routing';

// Components
import { CrComponent } from './cr.component';
import { CrCardComponent } from './components/cr-card/cr-card.component';
import { CrFooterComponent } from './components/cr-footer/cr-footer.component';
import { CrNavbarComponent } from './components/cr-navbar/cr-navbar.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { NewClanComponent } from './pages/new-clan/new-clan.component';
import { AboutComponent } from './pages/about/about.component';
import { TermsComponent } from './pages/terms/terms.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyA5qbyeV6hS0Qim4XcFsBFrx53daDSiGPY',
  databaseURL: 'https://stattracker-1d36d.firebaseio.com/',
  authDomain: 'stattracker-1d36d.firebaseapp.com',
};

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FlexLayoutModule,
    CrRoutingModule,
    MaterialsModule
  ],
  declarations: [
    CrComponent,
    CrCardComponent,
    HomeComponent,
    NewClanComponent,
    AboutComponent,
    CrFooterComponent,
    CrNavbarComponent,
    TermsComponent
  ],
  providers: [],
  bootstrap: [CrComponent]
})
export class CrModule { }
