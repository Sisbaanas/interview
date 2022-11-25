import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  public chart?: Chart;

  @Input()
  data!: any;

  ngOnInit() {
    this.chart = new Chart("canvasBar", {
      type: "bar",
      data: {
        labels: this.data?.labels,
        datasets: [
          {
            label: "# prix",
            data: this.data?.datasets[0]?.data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
          }
        ]
      },

    });
  }


}