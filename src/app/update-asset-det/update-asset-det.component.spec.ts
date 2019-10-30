import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssetDetComponent } from './update-asset-det.component';

describe('UpdateAssetDetComponent', () => {
  let component: UpdateAssetDetComponent;
  let fixture: ComponentFixture<UpdateAssetDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAssetDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAssetDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
