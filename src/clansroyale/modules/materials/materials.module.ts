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
  MdProgressBarModule,
  MdSnackBarModule
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
    MdProgressBarModule,
    MdSnackBarModule
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
    MdProgressBarModule,
    MdSnackBarModule
  ]
})
export class MaterialsModule { }
