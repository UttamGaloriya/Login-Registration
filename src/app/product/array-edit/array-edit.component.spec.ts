import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayEditComponent } from './array-edit.component';

describe('ArrayEditComponent', () => {
  let component: ArrayEditComponent;
  let fixture: ComponentFixture<ArrayEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
