import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  public chart?: Chart;

  @Input()
  data!:any;
  ngOnInit() {
    this.chart = new Chart("canvasPie", {
      type: "pie",
      data: this.data
    });
  }
  
}