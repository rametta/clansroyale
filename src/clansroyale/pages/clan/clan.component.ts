import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { IClan } from './../../cr';

@Component({
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.scss']
})
export class ClanComponent implements OnInit {

  clan: IClan;
  clan$: FirebaseObjectObservable<IClan>;
  loadingClan = true;

  constructor(
    public db: AngularFireDatabase,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.clan$ = this.db.object(`/clans/${this.route.snapshot.paramMap.get('id')}`);

    this.clan$
      .subscribe(clan => {
        if (clan.name && clan.tag) {
          this.clan = clan;
        }
        console.log(clan);
        this.loadingClan = false;
      }, err => {
        console.error(err);
        this.loadingClan = false;
      });
  }
}
