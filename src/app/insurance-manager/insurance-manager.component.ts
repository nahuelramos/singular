import { Component, OnInit, ViewChild } from '@angular/core';
import { InsuranceManagerService } from './services';
import { MatDialog, MatPaginator } from '@angular/material';
import { ModalComponent } from './components/modal/modal.component';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Paginator } from './models/paginator.model';

@Component({
  selector: 'app-insurance-manager',
  templateUrl: './insurance-manager.component.html',
  styleUrls: ['./insurance-manager.component.scss'],
  entryComponents: [ModalComponent]
})
export class InsuranceManagerComponent implements OnInit {
  insuranceData: any;
  paginatorInfo: Paginator;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private insuranceService: InsuranceManagerService, public dialog: MatDialog,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.paginatorInfo = this.insuranceService.getPaginatorInfo();
    this.insuranceData = this.insuranceService.getInsuranceData(this.paginatorInfo);
  }

  applyFilters(values: any) {
    this.insuranceData = this.insuranceService.applyFilters(values);
    this.paginator.firstPage();
    this.notificationService.showSuccess('filters applied! :)');
  }

  resetFilters() {
    this.insuranceData = this.insuranceService.resetFilters();
    this.paginator.firstPage();
    this.notificationService.showSuccess('filters rested! :)');
  }

  pageChange($event) {
    this.paginatorInfo.pageSize = $event.pageSize;
    this.paginatorInfo.pageIndex = $event.pageIndex;

    this.insuranceData = this.insuranceService.getInsuranceData(this.paginatorInfo);
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
