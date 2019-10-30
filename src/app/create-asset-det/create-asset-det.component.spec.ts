import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssetDetComponent } from './create-asset-det.component';

describe('CreateAssetDetComponent', () => {
  let component: CreateAssetDetComponent;
  let fixture: ComponentFixture<CreateAssetDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAssetDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAssetDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
