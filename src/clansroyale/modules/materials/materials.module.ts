import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdMenuModule,
  MdToolbarModule,
  MdCardModule,
  MdTooltipModule,
  MdInputModule,
  MdSliderModule,
  MdListModule
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
    MdSliderModule,
    MdListModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdMenuModule,
    MdToolbarModule,
    MdCardModule,
    MdTooltipModule,
    MdInputModule,
    MdSliderModule,
    MdListModule
  ]
})
export class MaterialsModule { }
