import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public submitted = false


  constructor() { }
   exform: FormGroup = new FormGroup({
    //'name' : new FormControl(null, Validators.required),
    'email' : new FormControl('', [Validators.required, Validators.email]),
    'password' : new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  get f(): { [key: string]: AbstractControl}{
    return this.exform.controls;
  }
  clicksub() {
    console.log(this.exform.value);
    this.exform.reset();
  }

  onSubmit(): void {
  this.submitted = true;
    /*if (this.exform.invalid) {
    console.log("invalid");
      return;
    }*/
    console.log("ay 7aga?")
    console.log(JSON.stringify(this.exform.value.email, null, 2));
    console.log(this.exform.value.email);
  }
  onReset(): void {
    this.submitted = false;
    this.exform.reset();
  }

 
  

  ngOnInit(): void {
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


