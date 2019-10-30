import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePurchaseDetComponent } from './create-purchase-det.component';

describe('CreatePurchaseDetComponent', () => {
  let component: CreatePurchaseDetComponent;
  let fixture: ComponentFixture<CreatePurchaseDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePurchaseDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePurchaseDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
