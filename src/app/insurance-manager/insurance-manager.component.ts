import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { InsuranceManagerService } from './services';

@Component({
  selector: 'app-insurance-manager',
  templateUrl: './insurance-manager.component.html',
  styleUrls: ['./insurance-manager.component.scss']
})
export class InsuranceManagerComponent implements OnInit {
  insuranceData: any[];

  constructor(private insuranceService: InsuranceManagerService) { }

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

}
