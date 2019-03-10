import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {  

  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;

  @Input() insuranceData: any;

  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit() {
    this.displayedColumns = ['name', 'brand', 'kind', 'price'];
    this.dataSource = new MatTableDataSource(this.insuranceData);
    this.dataSource.sort = this.sort;
  }
}
