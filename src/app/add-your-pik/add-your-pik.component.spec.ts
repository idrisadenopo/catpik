import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYourPikComponent } from './add-your-pik.component';

describe('AddYourPikComponent', () => {
  let component: AddYourPikComponent;
  let fixture: ComponentFixture<AddYourPikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddYourPikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddYourPikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
