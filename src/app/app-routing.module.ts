import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from 'src/app/core';
import { MainComponent } from 'src/app/main';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },  
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
