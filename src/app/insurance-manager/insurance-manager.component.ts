import { Component, OnInit } from '@angular/core';
import { InsuranceManagerService } from './services';
import { MatDialog } from '@angular/material';
import { ModalComponent } from './components/modal/modal.component';
import { NotificationService } from '../shared/services/notification.service';

@Component({
  selector: 'app-insurance-manager',
  templateUrl: './insurance-manager.component.html',
  styleUrls: ['./insurance-manager.component.scss'],
  entryComponents: [ModalComponent]
})
export class InsuranceManagerComponent implements OnInit {
  insuranceData: any;
  pageSize: number;
  pageIndex: number;
  totalPages: number;

  constructor(private insuranceService: InsuranceManagerService, public dialog: MatDialog, private notificationService: NotificationService) { }

  ngOnInit() {
    this.pageSize = 5;
    this.pageIndex = 0;
    this.totalPages = this.insuranceService.getTotalPages();
    this.insuranceData = this.insuranceService.getInsuranceData(this.pageIndex, this.pageSize);
  }

  applyFilters(values: any) {
    this.insuranceData = this.insuranceService.applyFilters(values);
  }

  resetFilters() {
    this.insuranceData = this.insuranceService.resetFilters();
  }

  pageChange($event) {
    this.pageSize = $event.pageSize;
    this.pageIndex = $event.pageIndex;

    this.insuranceData = this.insuranceService.getInsuranceData(this.pageIndex, this.pageSize);
  }

  showFavorites() {
    const favorites = this.insuranceService.getFavorites();

    if (favorites.data.length === 0) {
      this.notificationService.showWaring('There are not favorites :(');
      return;
    }

    const dialogRef = this.dialog.open(ModalComponent, {
      width: '1000px',
      data: this.insuranceService.getFavorites()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
