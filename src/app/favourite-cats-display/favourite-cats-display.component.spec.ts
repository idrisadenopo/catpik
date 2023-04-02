import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteCatsDisplayComponent } from './favourite-cats-display.component';

describe('FavouriteCatsDisplayComponent', () => {
  let component: FavouriteCatsDisplayComponent;
  let fixture: ComponentFixture<FavouriteCatsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavouriteCatsDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FavouriteCatsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
