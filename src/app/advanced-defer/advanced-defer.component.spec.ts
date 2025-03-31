import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedDeferComponent } from './advanced-defer.component';

describe('AdvancedDeferComponent', () => {
  let component: AdvancedDeferComponent;
  let fixture: ComponentFixture<AdvancedDeferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedDeferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedDeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
