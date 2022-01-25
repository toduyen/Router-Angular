import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable, of} from 'rxjs';
import {ServiceuserService} from "../Service/serviceuser.service";

@Injectable({
  providedIn: 'root'
})
export class ArticalGuard implements CanActivate , CanActivateChild {
  constructor(private readonly user: ServiceuserService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{
    return this.user.GetUser.pipe(map(x => !!x))
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>
  {
    const targetSlug = childRoute.params.slug;
    if(!targetSlug){
      return of(false);
    }
    return this.user.GetUser.pipe(user => user?.chinhthuc.includes(targetSlug));
  }
  
}
