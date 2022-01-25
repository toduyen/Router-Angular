import { Component, OnInit } from '@angular/core';
import {filter, Observable, pluck, switchMap} from "rxjs";
import {Usertype} from "../interface/Usertype";
import {ActivatedRoute} from "@angular/router";
import {ServiceuserService} from "../Service/serviceuser.service";
@Component({
  selector: 'app-detailuser',
  template: `
    <ng-container *ngIf="detailuser | async as data else nodata">
      <p>{{data.title}}</p>
    </ng-container>
    <ng-template #nodata>
      <p>Loading...</p>
    </ng-template>
  `,
  styles: [
  ]
})
export class DetailuserComponent implements OnInit {
  detailuser!:Observable<Usertype | undefined>;
  constructor(private readonly router:ActivatedRoute , private readonly detail: ServiceuserService) { }
  ngOnInit(): void {
    this.detailuser = this.router.params.pipe(
        pluck('slug'),
        switchMap(x => this.detail.Detailuser(x)),
        filter( detailuser => !!detailuser)
    )
  }

}
