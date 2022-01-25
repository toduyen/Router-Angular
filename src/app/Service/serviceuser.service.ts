import { Injectable } from '@angular/core';
import {map, of} from "rxjs";
import {Usertype} from "../interface/Usertype";

@Injectable({
  providedIn: 'root'
})
export class ServiceuserService {
  constructor() { }
  get GetUser(){
    return of([
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false,
        "chinhthuc" : ["delectus aut autem"]
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      },
      {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
      },
      {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
      },
      {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
      },
      {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
      },
    ])
  }
  Detailuser(slug: string){
    return  this.GetUser.pipe(map(x => x.find(y => y.title === slug)))
  }
}
