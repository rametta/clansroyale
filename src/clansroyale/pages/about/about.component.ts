import { Component } from '@angular/core';

@Component({
  template: `
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>About!</h1>

          <div>
            Welcome to Clans Royale &trade; the one stop shop for finding clan members!
          </div>

          <md-list>
            <h3 md-subheader>FAQ</h3>
            <md-list-item>
              <h4 md-line>How do I add my clan?</h4>
              <p md-line>Tap that pink button on the bottom right of the screen!</p>
            </md-list-item>
            <md-divider></md-divider>

            <md-list-item>
              <h4 md-line>How long will my post be visible?</h4>
              <p md-line>All posts will be visible for 1 week</p>
            </md-list-item>
            <md-divider></md-divider>

            <md-list-item>
              <h4 md-line>Why do I need a twitter account?</h4>
              <p md-line>We use twitter for authentication and to avoid spam</p>
            </md-list-item>
            <md-divider></md-divider>

            <md-list-item>
              <h4 md-line>How do I like my eggs?</h4>
              <p md-line>Over easy</p>
            </md-list-item>
            <md-divider></md-divider>

            <div class="margin-top disclaimer">
              <small>*All posts are subject to removal for breaking the <a routerLink="/terms">terms &amp; services</a></small>
            </div>

          </md-list>

        </div>
      </div>
    </div>
  `
})
export class AboutComponent { }
