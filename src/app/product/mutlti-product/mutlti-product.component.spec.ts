import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutltiProductComponent } from './mutlti-product.component';

describe('MutltiProductComponent', () => {
  let component: MutltiProductComponent;
  let fixture: ComponentFixture<MutltiProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutltiProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutltiProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
