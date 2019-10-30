import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVendorDetComponent } from './create-vendor-det.component';

describe('CreateVendorDetComponent', () => {
  let component: CreateVendorDetComponent;
  let fixture: ComponentFixture<CreateVendorDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVendorDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVendorDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
