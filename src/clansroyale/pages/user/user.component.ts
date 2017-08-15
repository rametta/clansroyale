import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProfile } from '../../cr';
import 'rxjs/add/operator/switchMap';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  profile: IProfile;

  constructor(public db: AngularFireDatabase, public route: ActivatedRoute) {

    this.route.paramMap
      .switchMap(paramMap => this.db.object(`/users/${paramMap.get('id')}`))
      .subscribe((profile: IProfile) => {
        this.profile = profile;
        console.log(profile);
      });
  }

}
