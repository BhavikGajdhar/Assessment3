import { TestBed } from '@angular/core/testing';

import { ListPresenterService } from './list-presenter.service';

describe('ListPresenterService', () => {
  let service: ListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
