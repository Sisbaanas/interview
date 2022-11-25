import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/AuthService';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required,],
    email: ['', Validators.required],
    password: ['', Validators.required,],
    password2: ['', Validators.required,],

  });
  
  submitted = false;
  passwordMatch = true;

  constructor(private router: Router,
    private fb: FormBuilder,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }

  signUp(e: any) {
    this.submitted = true;
    if(e.value.password != e.value.password2)
    {
      this.passwordMatch = false;
    }
    else{
      this.passwordMatch = true;
      this.authService.signup(e.value).subscribe(
        (response: any) => {
          this.router.navigate(['/auth']);
        },
        (error: any) => {
          console.log(error?.error?.messageError);
          console.log(e.value);
        },
      );
    }
  }
}
