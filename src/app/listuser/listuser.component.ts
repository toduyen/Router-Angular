import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Usertype} from "../interface/Usertype";
import {ServiceuserService} from "../Service/serviceuser.service";

@Component({
  selector: 'app-listuser',
  template: `
    <ng-container *ngIf="Datauser | async as data else nodata">
      <ul>
        <li style="border: 1px solid black; padding: 20px; margin-bottom: 12px" *ngFor="let x of data">
          {{x.title}}
          <br/>
          <a [routerLink]="['/detail', x.title]">CLICK ME</a>
        </li>
      </ul>
    </ng-container>
    <ng-template #nodata>
        <p>No data for me</p>
    </ng-template>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class ListuserComponent implements OnInit {

  Datauser!:Observable<Usertype[]>

  constructor( private readonly datauser: ServiceuserService) { }

  ngOnInit(): void {
    this.Datauser = this.datauser.GetUser;
  }

}
