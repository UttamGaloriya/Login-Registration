import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentdemoComponent } from './contentdemo.component';

describe('ContentdemoComponent', () => {
  let component: ContentdemoComponent;
  let fixture: ComponentFixture<ContentdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
