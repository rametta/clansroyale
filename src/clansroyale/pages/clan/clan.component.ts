import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { IClan, IComment } from './../../cr';
import { MdSnackBar } from '@angular/material';

@Component({
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.scss']
})
export class ClanComponent implements OnInit {

  clan: IClan;
  clan$: FirebaseObjectObservable<IClan>;
  loadingClan = true;
  user: firebase.User;
  clanId = this.route.snapshot.paramMap.get('id');

  commentForm: FormGroup = this.fb.group({ comment: '' });

  constructor(
    public db: AngularFireDatabase,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public afAuth: AngularFireAuth,
    public snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => this.user = user);
    this.clan$ = this.db.object(`/clans/${this.clanId}`);

    this.clan$
      .subscribe(clan => {
        if (clan.name && clan.tag) {
          this.clan = clan;
        }
        this.loadingClan = false;
      }, err => {
        console.error(err);
        this.loadingClan = false;
      });
  }

  commentKeys(): Array<string> {
    if (!this.clan || !this.clan.comments) { return []; }
    return Object.keys(this.clan.comments);
  }

  submitComment(): void {
    const comment: IComment = {
      username: this.user.displayName,
      uid: this.user.uid,
      comment: this.commentForm.get('comment').value,
      date: new Date().toISOString()
    };

    if (!comment.comment || !this.user) { return; }

    this.db.list(`/clans/${this.clanId}/comments`)
      .push(comment)
      .then(val => {
        const commentControl = this.commentForm.get('comment');
        commentControl.reset();
        commentControl.clearValidators();
        commentControl.updateValueAndValidity();

        this.snackBar.open('Comment Posted!', '🍕', { duration: 1000 });
      })
      .catch(err => console.error(err));
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }
}
