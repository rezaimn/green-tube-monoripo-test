import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalLibsComponent } from './external-libs.component';

describe('ExternalLibsComponent', () => {
  let component: ExternalLibsComponent;
  let fixture: ComponentFixture<ExternalLibsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalLibsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalLibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
