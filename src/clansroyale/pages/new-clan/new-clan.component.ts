import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { IClan } from './../../cr';

@Component({
  templateUrl: './new-clan.component.html',
  styleUrls: ['./new-clan.component.scss']
})
export class NewClanComponent implements OnInit {

  user: firebase.User;
  clans: FirebaseListObservable<Array<IClan>>;

  clanForm: FormGroup = this.fb.group({
    name: '',
    tag: '',
    trophies: 1600,
    description: ''
  });

  constructor(
    public db: AngularFireDatabase, 
    private fb: FormBuilder,
    private router: Router,
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => this.user = user);
    this.clans = this.db.list('/clans');
  }

  submitClan() {
    const clan: IClan = {
      name: this.clanForm.get('name').value,
      tag: this.clanForm.get('tag').value,
      trophies: this.clanForm.get('trophies').value,
      description: this.clanForm.get('description').value,
      date: new Date().toISOString()
    };

    if (!clan.name || !clan.description || !clan.tag || !this.user) { return; }

    this.clans.push(clan)
      .then(res => this.router.navigate(['/']))
      .catch(err => console.log(err));

  }

}
