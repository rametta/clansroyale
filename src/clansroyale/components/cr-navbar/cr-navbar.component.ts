import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'cr-navbar',
  templateUrl: './cr-navbar.component.html',
  styleUrls: ['./cr-navbar.component.scss']
})
export class CrNavbarComponent {

  user: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState
      .subscribe(user => this.user = user);
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
