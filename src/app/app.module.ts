import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { UnitDetailsComponent } from './unit-details/unit-details.component';
import { UnitsComponent } from './units/units.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CostParserComponent } from './cost-parser/cost-parser.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnitsComponent,
    UnitDetailsComponent,
    CostParserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
