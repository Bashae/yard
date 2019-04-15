import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleItemComponent } from './sale-item.component';

describe('SaleItemComponent', () => {
  let component: SaleItemComponent;
  let fixture: ComponentFixture<SaleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
