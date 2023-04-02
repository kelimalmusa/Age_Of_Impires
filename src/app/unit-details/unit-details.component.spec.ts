import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { UnitDetailsComponent } from './unit-details.component';

describe('UnitDetailsComponent', () => {
  let component: UnitDetailsComponent;
  let fixture: ComponentFixture<UnitDetailsComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [UnitDetailsComponent],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }],
    })
      .compileComponents();

    fixture = TestBed.createComponent(UnitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
