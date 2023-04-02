import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import { UnitsComponent } from './units.component';

describe('UnitsComponent', () => {
  let component: UnitsComponent;
  let fixture: ComponentFixture<UnitsComponent>;
  const fakeRouter = {
    
  } as Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitsComponent ],
      imports:[CommonModule,
        MatButtonToggleModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatSliderModule,
        MatCheckboxModule,
        MatTableModule, MatPaginatorModule,
        MatToolbarModule,
        FormsModule,
        MatCardModule],
        providers: [ {provide: Router, useValue: fakeRouter} ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should Be Defined",()=>{
    expect(component.selectedAge).toBeDefined();
  })
  it("should Be Defined",()=>{
    expect(component.agesFilters).toBeDefined();
  })

  it("should Be called FilterTable",()=>{
    expect(component.filterTable()).not.toBeDefined();
  })


  it("should Be ",()=>{
    expect(component.dataSource.data).toHaveSize(104);
  })

  it("should Be ",()=>{
    expect(component.selectedAge).toBe("All");
  })

  it("should Be agesFilters ",()=>{
    expect(component.agesFilters).toHaveSize(5);
  })

  it("should Be agesFilters ",()=>{
    expect(component.agesFilters).toBeDefined();
  })

  it("should Be agesFilters ",()=>{
    expect(component.paginator).toBeDefined();
  })

  it("should Be agesFilters ",()=>{
    component.costsFilters.goldChecked = true;
    component.costsFilters.woodChecked = true;
    component.costsFilters.foodChecked = true;
    expect(component.filterCost()).toBe();
  })

  it("should Be agesFilters ",()=>{
    component.costsFilters.goldChecked = false;
    component.costsFilters.woodChecked = true;
    component.costsFilters.foodChecked = true;
    component.filterCost();
    expect(component.filteredDataSource.data).toHaveSize(0);
  })

  it("should Be agesFilters ",()=>{
    component.costsFilters.goldChecked = true;
    component.costsFilters.woodChecked = true;
    component.costsFilters.foodChecked = false;
    component.filterCost();
    expect(component.filteredDataSource.data).toHaveSize(0);
  })

  it("should Be agesFilters ",()=>{
    component.costsFilters.goldChecked = true;
    component.costsFilters.woodChecked = false;
    component.costsFilters.foodChecked = false;
    component.filterCost();
    expect(component.filteredDataSource.data).toHaveSize(0);
  })

  it("should Be agesFilters ",()=>{
    component.costsFilters.goldChecked = true;
    component.costsFilters.woodChecked = false;
    component.costsFilters.foodChecked = true;
    component.filterCost();
    expect(component.filteredDataSource.data).toHaveSize(0);
  })

  it("should Be agesFilters ",()=>{
    component.costsFilters.goldChecked = false;
    component.costsFilters.woodChecked = true;
    component.costsFilters.foodChecked = false;
    component.filterCost();
    expect(component.filteredDataSource.data).toHaveSize(0);
  })

  it("should Be agesFilters ",()=>{
    component.costsFilters.goldChecked = false;
    component.costsFilters.woodChecked = false;
    component.costsFilters.foodChecked = true;
    component.filterCost();
    expect(component.filteredDataSource.data).toHaveSize(0);
  })

  it("should Be agesFilters ",()=>{
    component.filterTable();
    expect(component.filteredDataSource.data).toHaveSize(104);
  })

  it("should Be agesFilters ",()=>{
    component.selectedAge = "Dark"
    component.filterTable();
    expect(component.filteredDataSource.data).toHaveSize(13);
  })


});
