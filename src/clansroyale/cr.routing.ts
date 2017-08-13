import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrComponent } from './cr.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { NewClanComponent } from './pages/new-clan/new-clan.component';
import { AboutComponent } from './pages/about/about.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ClanComponent } from './pages/clan/clan.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'new', component: NewClanComponent },
      { path: 'clan/:id', component: ClanComponent },
      { path: 'about', component: AboutComponent },
      { path: 'terms', component: TermsComponent },
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
