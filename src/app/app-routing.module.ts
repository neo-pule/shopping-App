import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SignInPage } from './sign-in/sign-in.page';
// import { AngularFireAuthGuard, redirectLoggedInTo } from '@angular/fire/auth-guard';


// const redirectLoggedInToItems = redirectLoggedInTo(['home']);  , canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectLoggedInToItems } 

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  
  { path: 'sign-in', component : SignInPage},
   { path: 'home', loadChildren: './home/home.module#HomePageModule'},
{ path: 'add', loadChildren: './add/add.module#AddPageModule' },
{ path: 'edit', loadChildren: './edit/edit.module#EditPageModule' },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
