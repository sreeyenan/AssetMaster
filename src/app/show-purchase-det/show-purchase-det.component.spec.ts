import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPurchaseDetComponent } from './show-purchase-det.component';

describe('ShowPurchaseDetComponent', () => {
  let component: ShowPurchaseDetComponent;
  let fixture: ComponentFixture<ShowPurchaseDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPurchaseDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPurchaseDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
