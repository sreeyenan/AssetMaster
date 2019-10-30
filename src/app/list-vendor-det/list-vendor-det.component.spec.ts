import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVendorDetComponent } from './list-vendor-det.component';

describe('ListVendorDetComponent', () => {
  let component: ListVendorDetComponent;
  let fixture: ComponentFixture<ListVendorDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVendorDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVendorDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
