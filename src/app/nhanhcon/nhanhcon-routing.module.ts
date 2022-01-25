import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NhanhconComponent} from "./nhanhcon.component";
import {ListuserComponent} from "../listuser/listuser.component";

const routes: Routes = [
  {
    path: '',
    component: NhanhconComponent,
    children: [
      {
        path: 'list',
        component: ListuserComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NhanhconRoutingModule { }
