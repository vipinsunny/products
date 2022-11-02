import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMobilePhonesComponent } from './all-mobile-phones.component';

describe('AllMobilePhonesComponent', () => {
  let component: AllMobilePhonesComponent;
  let fixture: ComponentFixture<AllMobilePhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMobilePhonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMobilePhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
