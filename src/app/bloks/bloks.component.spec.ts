import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloksComponent } from './bloks.component';

describe('BloksComponent', () => {
  let component: BloksComponent;
  let fixture: ComponentFixture<BloksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
