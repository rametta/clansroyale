import { Component } from '@angular/core';

@Component({
  selector: 'cr-root',
  template: `
    <div fxLayout="column" style="height: 100%">
    
      <div>
        <cr-navbar></cr-navbar>
      </div>
    
      <div fxFlex>
        <router-outlet></router-outlet>
      </div>
    
      <div>
        <cr-footer></cr-footer>
      </div>
    </div>
  `,
})
export class CrComponent { }
