import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVendorDetComponent } from './update-vendor-det.component';

describe('UpdateVendorDetComponent', () => {
  let component: UpdateVendorDetComponent;
  let fixture: ComponentFixture<UpdateVendorDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVendorDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVendorDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
