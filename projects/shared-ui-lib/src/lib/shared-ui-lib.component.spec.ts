import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiLibComponent } from './shared-ui-lib.component';

describe('SharedUiLibComponent', () => {
  let component: SharedUiLibComponent;
  let fixture: ComponentFixture<SharedUiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedUiLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
