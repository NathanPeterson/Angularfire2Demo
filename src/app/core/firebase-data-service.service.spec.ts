/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FirebaseDataServiceService } from './firebase-data-service.service';

describe('FirebaseDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseDataServiceService]
    });
  });

  it('should ...', inject([FirebaseDataServiceService], (service: FirebaseDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
