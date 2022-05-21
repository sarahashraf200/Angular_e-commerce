import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService  } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public submitted = false
  email = "";
  password = "";

  constructor(private auth : AuthService) { }
   exform: FormGroup = new FormGroup({
   
    'email' : new FormControl (this.email, [Validators.required, Validators.email]) ,
    'password' : new FormControl(this.password, [Validators.required, Validators.minLength(6)])
  });

  get f(): { [key: string]: AbstractControl}{
    return this.exform.controls;
  }
  
  login(): void {
  this.submitted = true;
   
    console.log(this.exform.value.email);

   // calling the firebase auth service to auth the login 
    this.auth.login(this.email,this.password);

    // reseting the form
    this.exform.reset();
    
    this.submitted = false;

  }
  

  ngOnInit(): void {
   
  
  }

}
