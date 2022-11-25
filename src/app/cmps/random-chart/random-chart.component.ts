import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-random-chart',
  templateUrl: './random-chart.component.html',
  styleUrls: ['./random-chart.component.scss']
})
export class RandomChartComponent implements OnInit {

  public chart?: Chart;

  @Input()
  data!:any;
  ngOnInit() {
    this.chart = new Chart("canvasRandom", {
      type: "line",
      data: this.data
    });
  }
}
