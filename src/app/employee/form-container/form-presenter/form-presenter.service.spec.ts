import { TestBed } from '@angular/core/testing';

import { FormPresenterService } from './form-presenter.service';

describe('FormPresenterService', () => {
  let service: FormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
