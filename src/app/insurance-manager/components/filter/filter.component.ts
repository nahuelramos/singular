import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  formGroup: FormGroup;

  @Output() filterApplied = new EventEmitter<any>();
  @Output() resetFilters = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      'name': [null, [Validators.maxLength(30)]],
      'brand': [null, Validators.maxLength(30)],
      'kind': [null, [Validators.maxLength(30)]],
      'price': [null, [Validators.maxLength(10), Validators.pattern("^[0-9]*$")]]
    });
  }

  onSubmit(form: FormGroup) {
    const isEmpty = Object.values(form.value).every(x => (x === null || x === ''));
    
    if (isEmpty) {
      this.notificationService.showWaring('At least one filter must be complete');
      return;
    }

    if (form.invalid) {
      this.notificationService.showError('The field/s is/are not valid!');
      return;
    }

    this.filterApplied.emit(form.value);
  }

  resetFiltesr() {
    this.formGroup.reset();
    this.resetFilters.emit();
  }

}
