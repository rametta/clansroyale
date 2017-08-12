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
  MdIconModule,
  MdProgressBarModule
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
    MdIconModule,
    MdProgressBarModule
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
    MdIconModule,
    MdProgressBarModule
  ]
})
export class MaterialsModule { }
