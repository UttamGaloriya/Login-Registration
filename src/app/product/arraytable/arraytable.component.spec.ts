import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraytableComponent } from './arraytable.component';

describe('ArraytableComponent', () => {
  let component: ArraytableComponent;
  let fixture: ComponentFixture<ArraytableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArraytableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
