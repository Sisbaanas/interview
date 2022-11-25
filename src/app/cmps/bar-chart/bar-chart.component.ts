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
  data!:any;

  ngOnInit() {
    this.chart = new Chart("canvasBar", {
      type: "bar",
      data: this.data
    });
  }


  /*
   this.chart = new Chart("canvas", {
      type: "bar",
      data: {
        labels: ["object1", "object2", "object3", "object4"],
        datasets: [
          {
            label: "# prices",
            data: [12.5, 19, 3, 5],
            borderWidth: 1
          }
        ]
      },
      options: {
       
      }
    });
    */
}