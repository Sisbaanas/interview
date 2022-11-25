import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RandomChartComponent } from './random-chart/random-chart.component';
import { TableComponent } from './table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditElemPopupComponent } from './edit-elem-popup/edit-elem-popup.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    BarChartComponent,
    PieChartComponent,
    RandomChartComponent,
    TableComponent,
    EditElemPopupComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BarChartComponent,
    PieChartComponent,
    RandomChartComponent,
    TableComponent,
    EditElemPopupComponent,
    LoaderComponent
  ]
})
export class CmpsModule { }
