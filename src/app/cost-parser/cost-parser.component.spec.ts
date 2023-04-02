import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICost } from '../unit-details/unit-details.component';

import { CostParserComponent } from './cost-parser.component';

describe('CostParserComponent', () => {
  let component: CostParserComponent;
  let fixture: ComponentFixture<CostParserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostParserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called', () => {
    expect(component.ngOnInit()).not.toBeTruthy();
  });

  it('should called ngOnInit', () => {
    expect(component.costString).toBeDefined();
  });

  it('should called ngOnInit', () => {
    expect(component.costString).toBe("");
  });
  
  it('should called ngOnInit', () => {
    component.cost = {Wood:55,Food:32,Gold:25} as ICost
    expect(component.ngOnInit()).toBe();
  });
});
