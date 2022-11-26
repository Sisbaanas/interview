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
      data: {
        labels: this.data?.labels,
        datasets: [
          {
            label: "#prix",
            data: this.data?.data,
            backgroundColor: [
              'rgba(255, 205, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(153, 102, 255, 0.5)',
            ],
          }
        ]
      }
    });
  }
}
