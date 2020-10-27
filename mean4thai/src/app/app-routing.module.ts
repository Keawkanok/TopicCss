import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';

import { EditprofileComponent } from './editprofile/editprofile.component';
import { BookComponent } from './book/book.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    //canActivate: [AuthGuard],
  },
  {
    path: 'hero',
    component: HeroComponent,
  },
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'Book',
    component: BookComponent,
  },
  {
    path: 'Editprofile',
    component: EditprofileComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
