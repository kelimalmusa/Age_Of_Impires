import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnitDetailsComponent } from './unit-details/unit-details.component';
import { UnitsComponent } from './units/units.component';

const routes: Routes = [{ path: "", component: HomeComponent },{ path: "units", component: UnitsComponent }, { path: "unit-details/:id", component: UnitDetailsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
