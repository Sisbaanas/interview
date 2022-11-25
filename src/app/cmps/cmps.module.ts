import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RandomChartComponent } from './random-chart/random-chart.component';



@NgModule({
  declarations: [
    BarChartComponent,
    PieChartComponent,
    RandomChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BarChartComponent,
    PieChartComponent,
    RandomChartComponent
  ]
})
export class CmpsModule { }
