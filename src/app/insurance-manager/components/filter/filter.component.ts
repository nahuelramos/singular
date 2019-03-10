import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      'name': [null, [Validators.maxLength(10)]],
      'brand': [null, Validators.maxLength(10)],
      'kind': [null, [Validators.maxLength(10)]],
      'price': [null, [Validators.maxLength(10), Validators.pattern("\d*")]]
    });
  }

  onSubmit(form: FormGroup) {
    console.log('clicked', form);
  }

}
