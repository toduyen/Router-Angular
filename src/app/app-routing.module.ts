import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListuserComponent} from "./listuser/listuser.component";
import {DetailuserComponent} from "./detailuser/detailuser.component";
import {environment} from "../environments/environment";
import {ArticalGuard} from "./Guards/artical.guard";

const routes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./nhanhcon/nhanhcon.module').then(res => res.NhanhconModule),
        canActivate: [ArticalGuard]
    },
    // {path: 'detail/:slug' , component: DetailuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
      enableTracing: !environment.production
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
