import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDeliveryDateComponent } from './purchase-delivery-date.component';

describe('PurchaseDeliveryDateComponent', () => {
  let component: PurchaseDeliveryDateComponent;
  let fixture: ComponentFixture<PurchaseDeliveryDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseDeliveryDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseDeliveryDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
