import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private http: HttpClient) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('token')) {
      return true;
      // return this.http.get('').pipe(map((x: any) => {
      //   if (x.role === 'admin') {
      //     return this.router.parseUrl('/admin');
      //   } else {
      //     return this.router.parseUrl('/');
      //   }
      // }));
    } else {
      return this.router.parseUrl('/login?returnUrl=' + state.url);
    }
  }

}
