import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssetMasterComponent } from './update-asset-master.component';

describe('UpdateAssetMasterComponent', () => {
  let component: UpdateAssetMasterComponent;
  let fixture: ComponentFixture<UpdateAssetMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAssetMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAssetMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
