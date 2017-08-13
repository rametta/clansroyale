import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { IClan } from './../../cr';
import * as moment from 'moment';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clans: FirebaseListObservable<Array<IClan>>;
  loadingClans = true;

  constructor(public db: AngularFireDatabase) {}

  ngOnInit() {
    const today = moment();
    const lastWeek = moment(today).subtract(7, 'days');

    this.clans = this.db.list('/clans', {
      query: {
        orderByChild: 'date',
        endAt: today.toISOString(),
        startAt: lastWeek.toISOString()
      }
    });

    this.clans
      .subscribe(clans => {
        this.loadingClans = false;
      }, err => {
        this.loadingClans = false;
        console.error(err);
      });
  }
}
