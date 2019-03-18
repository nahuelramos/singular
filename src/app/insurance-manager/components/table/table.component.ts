import { Component, OnInit, ViewChild, Input, DoCheck, IterableDiffers, Output, EventEmitter } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Insurance } from '../../models/insurance.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, DoCheck {  

  dataSource: MatTableDataSource<Insurance>;
  iterableDiffer: any;
  
  @Input() displayedColumns: string[] = ['logo', 'name', 'brand', 'kind', 'price', 'favorite'];
  @Input() insuranceData: MatTableDataSource<Insurance>;

  @Output() favoriteRemoved: EventEmitter<Insurance>  = new EventEmitter<Insurance>();

  @ViewChild(MatSort) sort: MatSort;

  constructor(private _iterableDiffers: IterableDiffers) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  ngOnInit() {
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

    if (!element.isFavorite) {
      this.favoriteRemoved.emit(element);
    }
  }
}
