import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { PageNotFoundComponent } from './components';

@NgModule({
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
