import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDailogComponent } from './chart-dailog.component';

describe('ChartDailogComponent', () => {
  let component: ChartDailogComponent;
  let fixture: ComponentFixture<ChartDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
