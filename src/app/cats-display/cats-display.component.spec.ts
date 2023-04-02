import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsDisplayComponent } from './cats-display.component';

describe('CatsDisplayComponent', () => {
  let component: CatsDisplayComponent;
  let fixture: ComponentFixture<CatsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatsDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
