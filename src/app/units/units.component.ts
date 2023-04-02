import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { units } from '../ageOfEmpires';
import { Router } from '@angular/router';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})


export class UnitsComponent implements AfterViewInit {
  agesFilters: string[] = ["All", "Dark", "Feudal", "Castle", "Imperial"]
  costsFilters: ICostsFilter = { woodChecked: false, woodMin: 0, woodMax: 0, woodValue: 0, foodChecked: false, foodMin: 0, foodMax: 0, foodValue: 0, goldChecked: false, goldMin: 0, goldMax: 0, goldValue: 0 };
  selectedAge = "All";
  displayedColumns: string[] = ['id', 'name', 'age', 'costs'];
  dataSource = new MatTableDataSource<ITableElements>(TableElements as unknown as ITableElements[]);
  filteredDataSource = new MatTableDataSource<ITableElements>(TableElements as unknown as ITableElements[]);

  constructor(private router:Router) {
    this.dataSource.data = TableElements as unknown as ITableElements[]
    this.filteredDataSource.data = this.dataSource.data
  }
  @ViewChild("paginator") paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.filteredDataSource.paginator = this.paginator
  }

  filterTable() {
    this.filteredDataSource.data = TableElements.filter(el => {
      // Age filtered All
      if (this.selectedAge === "All") {
        return this.filteredDataSource;
      }

      else {
        return el.age === this.selectedAge
      }
    }) as unknown as ITableElements[];
    this.filterCost();

  }

  filterCost() {
    if (this.costsFilters.woodChecked && !this.costsFilters.foodChecked && !this.costsFilters.goldChecked) {
      this.filteredDataSource.data = this.filteredDataSource.data.filter(el => {
        return el.cost?.Wood >= this.costsFilters.woodMin && el.cost?.Wood <= this.costsFilters.woodMax;
      })
    }
    else if (!this.costsFilters.woodChecked && this.costsFilters.foodChecked && !this.costsFilters.goldChecked) {
      this.filteredDataSource.data = this.filteredDataSource.data.filter(el => {
        return el.cost?.Food >= this.costsFilters.foodMin && el.cost?.Food <= this.costsFilters.foodMax;
      })
    }
    else if (!this.costsFilters.woodChecked && !this.costsFilters.foodChecked && this.costsFilters.goldChecked) {
      this.filteredDataSource.data = this.filteredDataSource.data.filter(el => {
        return el.cost?.Gold >= this.costsFilters.goldMin && el.cost?.Gold <= this.costsFilters.goldMax;
      })
    }
    else if (this.costsFilters.woodChecked && this.costsFilters.foodChecked && !this.costsFilters.goldChecked) {
      this.filteredDataSource.data = this.filteredDataSource.data.filter(el => {
        return el.cost?.Wood >= this.costsFilters.woodMin && el.cost?.Wood <= this.costsFilters.woodMax && el.cost?.Food >= this.costsFilters.foodMin && el.cost?.Food <= this.costsFilters.foodMax;
      })
    }
    else if (this.costsFilters.woodChecked && !this.costsFilters.foodChecked && this.costsFilters.goldChecked) {
      this.filteredDataSource.data = this.filteredDataSource.data.filter(el => {
        return el.cost?.Wood >= this.costsFilters.woodMin && el.cost?.Wood <= this.costsFilters.woodMax && el.cost?.Gold >= this.costsFilters.goldMin && el.cost?.Gold <= this.costsFilters.goldMax;
      })
    }
    else if (!this.costsFilters.woodChecked && this.costsFilters.foodChecked && this.costsFilters.goldChecked) {
      this.filteredDataSource.data = this.filteredDataSource.data.filter(el => {
        return el.cost?.Food >= this.costsFilters.foodMin && el.cost?.Food <= this.costsFilters.foodMax && el.cost?.Gold >= this.costsFilters.goldMin && el.cost?.Gold <= this.costsFilters.goldMax;
      })
    }
    else if (this.costsFilters.woodChecked && this.costsFilters.foodChecked && this.costsFilters.goldChecked) {
      this.filteredDataSource.data = this.filteredDataSource.data.filter(el => {
        return el.cost?.Wood >= this.costsFilters.woodMin && el.cost?.Wood <= this.costsFilters.woodMax && el.cost?.Food >= this.costsFilters.foodMin && el.cost?.Food <= this.costsFilters.foodMax && el.cost?.Gold >= this.costsFilters.goldMin && el.cost?.Gold <= this.costsFilters.goldMax;
      })
    }
  }

  navigate(url:string,param:number){
    this.router.navigate([url,param]);

  }
}

const TableElements = units;

interface ICostsFilter {
  woodChecked: boolean
  woodMin: number;
  woodMax: number;
  woodValue: number;
  foodChecked: boolean
  foodMin: number;
  foodMax: number;
  foodValue: number;
  goldChecked: boolean
  goldMin: number;
  goldMax: number;
  goldValue: number;
}

interface ITableElements {
  id: number;
  name: string;
  age: string;
  cost: any;
}
