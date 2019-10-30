import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPurchaseDetComponent } from './list-purchase-det.component';

describe('ListPurchaseDetComponent', () => {
  let component: ListPurchaseDetComponent;
  let fixture: ComponentFixture<ListPurchaseDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPurchaseDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPurchaseDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
