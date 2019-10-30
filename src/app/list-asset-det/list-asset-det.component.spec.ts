import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAssetDetComponent } from './list-asset-det.component';

describe('ListAssetDetComponent', () => {
  let component: ListAssetDetComponent;
  let fixture: ComponentFixture<ListAssetDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAssetDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAssetDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
