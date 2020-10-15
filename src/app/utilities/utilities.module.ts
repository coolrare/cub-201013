import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilitiesRoutingModule } from './utilities-routing.module';
import { ColorComponent } from './color/color.component';


@NgModule({
  declarations: [
    ColorComponent
  ],
  imports: [
    CommonModule,
    UtilitiesRoutingModule
  ]
})
export class UtilitiesModule { }
