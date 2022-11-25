import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required,],
    source:['CUSTOMER']
  });

  constructor(private router: Router,
              private fb: FormBuilder,
              private authService:AuthService) { }

  ngOnInit(): void {
  }

  Login(e:any)
  {
    this.authService.Login(e.value).subscribe(
      (response: any) => {
        localStorage.setItem("Authorization", response?.token)
        this.router.navigate(['/user/home']);
      },
      (error: any) => {
        console.log(error?.error?.messageError);
      },
    );
  }

  goToSignUp()
  {
    this.router.navigate(['/auth/signup']);
  }

}
