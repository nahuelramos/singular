import { getTestBed, TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import { ToastrService } from 'ngx-toastr';

describe('NotificationService', () => {
  let injector: TestBed;
  let service: NotificationService;
  let toastrServiceStub: Partial<any> = {
    success() {},
    error() {},
    warning() {}
  }

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        NotificationService,
        { provide: ToastrService, useValue: toastrServiceStub }
      ]
    });

    injector = getTestBed();
    service = injector.get(NotificationService);
    toastrServiceStub = TestBed.get(ToastrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call successToastr with define parameters when success method is called', () => {
    const message = 'successMessageTest';
    const spyToastr = spyOn(toastrServiceStub, 'success').and.callFake(() => { });

    service.showSuccess(message);

    expect(spyToastr).toHaveBeenCalledWith(message, 'Success!');
  });

  it('should call errorToastr with define parameters when error method is called', () => {
    const message = 'successMessageTest';
    const spyToastr = spyOn(toastrServiceStub, 'error').and.callFake(() => { });

    service.showError(message);

    expect(spyToastr).toHaveBeenCalledWith(message, 'Oops!');
  });

  it('should call warningToastr with define parameters when warning method is called', () => {
    const message = 'successMessageTest';
    const spyToastr = spyOn(toastrServiceStub, 'warning').and.callFake(() => { });

    service.showWaring(message);

    expect(spyToastr).toHaveBeenCalledWith(message, 'Warning');
  });
});
