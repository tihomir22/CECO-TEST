import { TestBed } from '@angular/core/testing';

import { SnackbarControllerService } from './snackbar-controller.service';

describe('SnackbarControllerService', () => {
  let service: SnackbarControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackbarControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
