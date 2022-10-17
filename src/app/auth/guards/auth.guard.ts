import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    return this.authService.verifyAuthentication()
                .pipe(
                  tap( isAutheticated => {
                    if (!isAutheticated) {
                      this.router.navigate(['/auth/login'])
                    }
                  } )
                )
    
    // if (this.authService.auth.id ) {
    //   return true;
    // }
    // return false;
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.verifyAuthentication()
              .pipe(
                tap( isAutheticated => {
                  if (!isAutheticated) {
                    this.router.navigate(['/auth/login'])
                  }
                } )
              );

    // if (this.authService.auth.id ) {
    //   return true;
    // }
    // return false;
  }

}
