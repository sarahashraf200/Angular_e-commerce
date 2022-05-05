import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselProductDetailsComponent } from './carousel-product-details.component';

describe('CarouselProductDetailsComponent', () => {
  let component: CarouselProductDetailsComponent;
  let fixture: ComponentFixture<CarouselProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
