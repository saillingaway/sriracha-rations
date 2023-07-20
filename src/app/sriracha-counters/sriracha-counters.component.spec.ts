import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrirachaCountersComponent } from './sriracha-counters.component';

describe('SrirachaCountersComponent', () => {
  let component: SrirachaCountersComponent;
  let fixture: ComponentFixture<SrirachaCountersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SrirachaCountersComponent]
    });
    fixture = TestBed.createComponent(SrirachaCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
