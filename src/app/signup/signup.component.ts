import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CallService } from '../call.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private httpService: CallService, private rout:Router) {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
  }
  onSubmit(): void {
    if (this.signupForm.invalid) {
      return;
    }

    const userData = this.signupForm.value;
    console.log(userData);
    this.httpService.signup(userData).subscribe(
      response => {
        
        console.log("data submited",response);
        this.rout.navigate(['/login']);
      },
      error => {
        // Handle the error here
        console.error(error);
      }
    );
  }
}
