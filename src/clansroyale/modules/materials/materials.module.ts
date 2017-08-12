import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdMenuModule,
  MdToolbarModule,
  MdCardModule,
  MdTooltipModule,
  MdInputModule,
  MdSliderModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdMenuModule,
    MdToolbarModule,
    MdCardModule,
    MdTooltipModule,
    MdInputModule,
    MdSliderModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdMenuModule,
    MdToolbarModule,
    MdCardModule,
    MdTooltipModule,
    MdInputModule,
    MdSliderModule
  ]
})
export class MaterialsModule { }
