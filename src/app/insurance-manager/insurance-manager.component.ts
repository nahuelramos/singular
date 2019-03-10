import { Component, OnInit } from '@angular/core';
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

}
