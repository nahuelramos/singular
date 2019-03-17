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

  constructor(private insuranceService: InsuranceManagerService, public dialog: MatDialog, private notificationService: NotificationService) { }

  ngOnInit() {
    this.insuranceService.getInsuranceData().subscribe((insuranceData: any) => {
        this.insuranceData = insuranceData;
    });
  }

  applyFilters(values: any) {
    this.insuranceData = this.insuranceService.applyFilters(values);
  }

  resetFilters() {
    this.insuranceData = this.insuranceService.resetFilters();
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
