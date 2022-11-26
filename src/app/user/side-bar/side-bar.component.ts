import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goDashboard()
  {
    this.router.navigateByUrl('/user/dashboard');
  }

  goData()
  {
    this.router.navigateByUrl('/user/data');
  }

  goUpload()
  {
    this.router.navigateByUrl('/user/upload');
  }

  logout()
  {
    this.router.navigateByUrl('/auth/login');
    localStorage.removeItem("Authorization")
  }
}
