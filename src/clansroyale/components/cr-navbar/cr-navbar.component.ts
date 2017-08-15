import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { IProfile } from '../../cr';
import 'rxjs/add/operator/mergeMap';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'cr-navbar',
  templateUrl: './cr-navbar.component.html',
  styleUrls: ['./cr-navbar.component.scss']
})
export class CrNavbarComponent {

  user: firebase.User;
  profile: IProfile;

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
    afAuth.authState
      .mergeMap(
        (user: firebase.User) => this.db.object(`/users/${user.uid}`),
        (user: firebase.User, profile: IProfile) => ({ user, profile })
      )
      .subscribe(({user, profile}) => {
        this.user = user;
        this.profile = profile;
        if (!profile.$exists()) {
          this.createProfile();
        }
      });
  }

  createProfile() {
    this.db.object(`/users/${this.user.uid}`).set({
      displayName: this.user.displayName,
      lastUpdate: new Date().toISOString(),
      name: this.user.displayName,
      nickname: this.user.displayName,
      photo: this.user.photoURL,
      uid: this.user.uid
    } as IProfile);
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
