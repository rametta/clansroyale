import { Component } from '@angular/core';

@Component({
  selector: 'cr-root',
  template: `
    <div class="cr-root">
    
      <div>
        <cr-navbar></cr-navbar>
      </div>
    
      <div class="cr-content">
        <router-outlet></router-outlet>
      </div>
    
      <div class="margin-top">
        <cr-footer></cr-footer>
      </div>
    </div>
  `,
  styles: [`
    .cr-root {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .cr-content {
      flex: 1
    }
  `]
})
export class CrComponent { }
