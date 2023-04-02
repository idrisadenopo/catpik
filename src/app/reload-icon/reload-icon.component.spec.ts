import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadIconComponent } from './reload-icon.component';

describe('ReloadIconComponent', () => {
  let component: ReloadIconComponent;
  let fixture: ComponentFixture<ReloadIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReloadIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReloadIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
