import { TestBed, inject } from '@angular/core/testing';

import { ProcessorOfThingsService } from './processor-of-things.service';

describe('ProcessorOfThingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessorOfThingsService]
    });
  });

  it('should ...', inject([ProcessorOfThingsService], (service: ProcessorOfThingsService) => {
    expect(service).toBeTruthy();
  }));
});
