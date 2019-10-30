import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAssetDetComponent } from './show-asset-det.component';

describe('ShowAssetDetComponent', () => {
  let component: ShowAssetDetComponent;
  let fixture: ComponentFixture<ShowAssetDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAssetDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAssetDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
