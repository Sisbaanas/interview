import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/UserService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  chartData?:any;

  constructor(private userService:UserService) {
    this.getChartData();
   }

  ngOnInit(): void {
    
  }

  getChartData()
  {
    this.userService.getChart().subscribe(
      (response: any) => {
        this.chartData = response;
        console.log(response);
        
      },
      (error: any) => {
        console.log(error?.error?.messageError);
      },
    );
  }

}
