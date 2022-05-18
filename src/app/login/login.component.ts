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
    //'name' : new FormControl(null, Validators.required),
    'email' : new FormControl (this.email, [Validators.required, Validators.email]) ,
    'password' : new FormControl(this.password, [Validators.required, Validators.minLength(6)])
  });

  get f(): { [key: string]: AbstractControl}{
    return this.exform.controls;
  }
  clicksub() {
    console.log(this.exform.value);
    this.exform.reset();
  }

  login(): void {
  this.submitted = true;
   
    console.log(this.exform.value.email);
   
    this.auth.login(this.email,this.password);
    this.exform.reset();
    this.submitted = false;

  }
  

  ngOnInit(): void {
    //this.auth.final_try();
  
  }

}
