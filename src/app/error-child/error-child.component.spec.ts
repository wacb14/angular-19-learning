import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorChildComponent } from './error-child.component';

describe('ErrorChildComponent', () => {
  let component: ErrorChildComponent;
  let fixture: ComponentFixture<ErrorChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
