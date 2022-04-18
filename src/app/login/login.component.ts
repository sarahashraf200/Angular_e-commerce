import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username = "";
  public password ="";
  public map = new Map()
  public success_flag = false;
  public click_flag = false;


  constructor() { 
    this.map.set("one", "first element");
    this.map.set("two", "second element");
    this.map.set("sarah", "123");
  }

  ngOnInit(): void {
  }

onclick(){
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

    
    

}

print(){
  for (let [key, value] of this.map) {
    console.log(key + " = " + value);
    }
}

}
