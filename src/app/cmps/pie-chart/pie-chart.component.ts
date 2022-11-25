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
      data: {
        labels: this.data?.labels,
        datasets: [
          {
            label: "#prix",
            data: this.data?.datasets[0]?.data,
            backgroundColor: [
              'rgba(255, 205, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(153, 102, 255, 0.5)',
            ],
          }
        ]
      },

    });
  }


}