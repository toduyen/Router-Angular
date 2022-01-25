import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nhanhcon',
  template: `
    <p>
      nhanhcon works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class NhanhconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
