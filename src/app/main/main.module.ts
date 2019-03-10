import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { InsuranceManagerModule } from 'src/app/insurance-manager';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  imports: [
    CommonModule,
    InsuranceManagerModule,
    SharedModule
  ]
})
export class MainModule { }
