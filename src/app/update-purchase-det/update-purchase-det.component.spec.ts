import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePurchaseDetComponent } from './update-purchase-det.component';

describe('UpdatePurchaseDetComponent', () => {
  let component: UpdatePurchaseDetComponent;
  let fixture: ComponentFixture<UpdatePurchaseDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePurchaseDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePurchaseDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
