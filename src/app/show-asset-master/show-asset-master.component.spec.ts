import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAssetMasterComponent } from './show-asset-master.component';

describe('ShowAssetMasterComponent', () => {
  let component: ShowAssetMasterComponent;
  let fixture: ComponentFixture<ShowAssetMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAssetMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAssetMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
