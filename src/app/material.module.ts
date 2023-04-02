import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatCheckboxModule,
    MatTableModule, MatPaginatorModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [MatButtonToggleModule, MatButtonModule, BrowserAnimationsModule, MatSliderModule,
    MatCheckboxModule, MatTableModule, MatPaginatorModule, MatToolbarModule, MatCardModule]

})
export class MaterialModule { }
