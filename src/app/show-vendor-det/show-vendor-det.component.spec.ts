import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVendorDetComponent } from './show-vendor-det.component';

describe('ShowVendorDetComponent', () => {
  let component: ShowVendorDetComponent;
  let fixture: ComponentFixture<ShowVendorDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowVendorDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVendorDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
