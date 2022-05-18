import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   email = "";
   password = "";
   public submitted2 = false
  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }
/*
  register() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.register(this.email,this.password);
    
    this.email = '';
    this.password = '';

  }*/
  exform: FormGroup = new FormGroup({
    
    'email' : new FormControl (this.email, [Validators.required, Validators.email]) ,
    'password' : new FormControl(this.password, [Validators.required, Validators.minLength(6)])
  });

  get f(): { [key: string]: AbstractControl}{
    return this.exform.controls;
  }
 

  register(): void {
  this.submitted2 = true;
   
    console.log(this.exform.value.email);
   
    this.auth.register(this.email,this.password);
    this.exform.reset();
    this.submitted2 = false;
 
  }
  
 

 
  


}
