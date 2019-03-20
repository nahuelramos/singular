import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InsuranceManagerService } from '../../services';
import { Insurance } from '../../models/insurance.model';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  displayedColumns: string[];
  showPrice: boolean ;

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public favorites: any, private insuranceService: InsuranceManagerService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.displayedColumns = ['logo', 'name', 'brand', 'kind', 'favorite'];
    this.showPrice = false;
  }

  closeModal() {
    this.dialogRef.close();
  }

  applyFilters(values: any) {
    this.favorites = this.insuranceService.applyFavoriteFilters(values);
    this.notificationService.showSuccess('filters applied! :)');
  }

  resetFilters() {
    this.favorites = this.insuranceService.resetFavoriteFilters();
    this.notificationService.showSuccess('filters rested! :)');
  }

  favoriteRemoved(favorite: Insurance) {
    this.favorites = this.insuranceService.removeFavorite(favorite);

    if (this.favorites.data.length === 0) {
      this.notificationService.showWaring('There is not favorites to show :(');
      this.closeModal();
    }
  }

}
