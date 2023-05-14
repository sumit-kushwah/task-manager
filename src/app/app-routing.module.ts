import { NgModule, inject } from '@angular/core';
import { Auth, authState, user } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, Router, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { map } from 'rxjs';

const isUserLoggedIn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const auth = inject(Auth);
  const user$ = user(auth);
  const router: Router = inject(Router);
  return user$.pipe(map(user => {
    if (!user) {
      return router.parseUrl('/auth');
      return false;
    }
    return true;
  }));
}

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [isUserLoggedIn]
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
