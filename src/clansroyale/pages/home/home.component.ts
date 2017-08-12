import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { IClan } from './../../cr';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clans: FirebaseListObservable<Array<IClan>>;
  loadingClans = true;

  constructor(public db: AngularFireDatabase) {}

  ngOnInit() {
    this.clans = this.db.list('/clans');

    this.clans
      .subscribe(clan => { 
        this.loadingClans = false;
        console.log(clan)
      });
  }
}
