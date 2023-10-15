import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/compiler/src/core';
import { CallService } from '../call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private callService: CallService, private route :Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    
  }

  onsubmit() {
   
      if (this.loginForm.invalid) {
        return;
      }
    
      // const email = this.loginForm.get('email').value;
      // const password = this.loginForm.get('password').value;
      const udata= this.loginForm.value
    console.log(udata)
      this.callService.login(udata).subscribe(
        
        (response) => {
          console.log("Succes Full",response)
          this.route.navigate(['post']);
        },
        (error) => {
          // Login failed, handle the error here
          console.log("Succes Full",error)

        }
      );
    
  }

}
