import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }
  
  showSuccess(text: string = ':)') {
    this.toastr.success('Success!', text);
  }

  showError(text: string = ':(') {
    this.toastr.error('Oops!', text);
  }

  showWaring(text: string = ':|') {
    this.toastr.warning('Warning', text);
  }
}
