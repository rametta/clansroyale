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
  MdListModule,
  MdIconModule
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
    MdListModule,
    MdIconModule
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
    MdListModule,
    MdIconModule
  ]
})
export class MaterialsModule { }
