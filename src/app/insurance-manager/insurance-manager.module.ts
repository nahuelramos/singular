import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { InsuranceManagerComponent } from './insurance-manager.component';
import { FilterComponent, TableComponent } from './components';
import { InsuranceManagerService } from './services';

@NgModule({
  declarations: [InsuranceManagerComponent, TableComponent, FilterComponent],
  exports: [InsuranceManagerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [InsuranceManagerService]
})
export class InsuranceManagerModule { }
