import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresonalGrowthComponent } from './personal-growth.component';

describe('PresonalGrowthComponent', () => {
  let component: PresonalGrowthComponent;
  let fixture: ComponentFixture<PresonalGrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresonalGrowthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresonalGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
