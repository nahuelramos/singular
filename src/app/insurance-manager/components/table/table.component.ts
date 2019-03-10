import { Component, OnInit, ViewChild, Input, DoCheck, IterableDiffers } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, DoCheck {  

  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  iterableDiffer: any;

  @Input() insuranceData: any;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private _iterableDiffers: IterableDiffers) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  ngOnInit() {
    this.displayedColumns = ['name', 'brand', 'kind', 'price'];
    this.dataSource = new MatTableDataSource(this.insuranceData);
    this.dataSource.sort = this.sort;
  }

  ngDoCheck() {
    const changes = this.iterableDiffer.diff(this.insuranceData);
    if (changes) {
        this.dataSource = new MatTableDataSource(this.insuranceData);
    }
  }
}
