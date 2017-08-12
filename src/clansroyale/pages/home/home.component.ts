import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { IClan } from './../../cr';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: Observable<firebase.User>;
  clans: FirebaseListObservable<Array<IClan>>;

  constructor(public db: AngularFireDatabase) {}

  ngOnInit() {
    this.clans = this.db.list('/clans');
  }
}
