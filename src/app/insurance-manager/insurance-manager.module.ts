import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

import { InsuranceManagerComponent } from './insurance-manager.component';
import { FilterComponent, TableComponent } from './components';
import { InsuranceManagerService } from './services';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [InsuranceManagerComponent, TableComponent, FilterComponent, ModalComponent],
  exports: [InsuranceManagerComponent],
  entryComponents: [ModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  providers: [InsuranceManagerService]
})
export class InsuranceManagerModule { }
