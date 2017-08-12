import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrComponent } from './cr.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { NewClanComponent } from './pages/new-clan/new-clan.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'new', component: NewClanComponent },
      { path: 'about', component: AboutComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CrRoutingModule { }
