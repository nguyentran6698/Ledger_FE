import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTokenComponent } from './buy-token.component';

describe('BuyTokenComponent', () => {
  let component: BuyTokenComponent;
  let fixture: ComponentFixture<BuyTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BuyTokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
