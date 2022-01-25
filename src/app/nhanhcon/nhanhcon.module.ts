import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NhanhconRoutingModule } from './nhanhcon-routing.module';
import { NhanhconComponent } from './nhanhcon.component';


@NgModule({
  declarations: [
    NhanhconComponent
  ],
  imports: [
    CommonModule,
    NhanhconRoutingModule
  ]
})
export class NhanhconModule { }
