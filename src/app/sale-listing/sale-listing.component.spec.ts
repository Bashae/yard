import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleListingComponent } from './sale-listing.component';

describe('SaleListingComponent', () => {
  let component: SaleListingComponent;
  let fixture: ComponentFixture<SaleListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleListingComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
