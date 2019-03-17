import { Component, OnInit, ViewChild, Input, DoCheck, IterableDiffers } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Insurance } from '../../models/insurance.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, DoCheck {  

  displayedColumns: string[];
  dataSource: MatTableDataSource<Insurance>;
  iterableDiffer: any;

  @Input() insuranceData: MatTableDataSource<Insurance>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private _iterableDiffers: IterableDiffers) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  ngOnInit() {
    this.displayedColumns = ['name', 'brand', 'kind', 'price', 'favorite'];
    this.dataSource = this.insuranceData;
    this.dataSource.sort = this.sort;
  }

  ngDoCheck() {
    const changes = this.iterableDiffer.diff(this.insuranceData.data);
    if (changes) {
        this.dataSource = this.insuranceData;
        this.dataSource.sort = this.sort;
    }
  }

  setFavorite(element: Insurance) {
    element.isFavorite ? element.isFavorite = false : element.isFavorite = true;
  }
}
