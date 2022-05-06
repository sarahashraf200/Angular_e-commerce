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
    /*if (this.exform.invalid) {
    console.log("invalid");
      return;
    }*/

    console.log("ay 7aga?")
   // console.log(this.auth.auth)
    //console.log(JSON.stringify(this.exform.value.email, null, 2));
    console.log(this.exform.value.email);
    this.auth.login(this.email,this.password);
    console.log("token222" , this.auth.isLoggedIn())

    
    //this.email = '';
    //this.password = '';
  }
  checkAdmin(){
    
  }
  onReset(): void {
    this.submitted = false;
    this.exform.reset();
  }

 
  

  ngOnInit(): void {
    this.checkAdmin();
  }










/*onclick(){
  this.click_flag = true;
  this.success_flag = false;
  for (let [key, value] of this.map) {
    //console.log(key + " = " + value);
    if (this.username == key && this.password == value){
      console.log("sucess");
      this.success_flag = true;
      break;
    }
    }
    
    if(this.success_flag == false){
      console.log("fail");
     
    }
*/
    
    

}

/*print(){
  for (let [key, value] of this.map) {
    console.log(key + " = " + value);
    }
}*/


