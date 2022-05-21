import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, observable } from 'rxjs';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ThisReceiver } from '@angular/compiler';
import { AdminGuard } from '../guard/admin.guard';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  flag_login : any;
  flag_logged_in : boolean = false;
  uiid = ""
  isadmin : boolean = false;
  user_id = ""
  uiiid = ""



  constructor(private fireauth : AngularFireAuth , private router : Router) {
  
      this.isAdmin();
  
   }
  // LOGIN method
  login(email : string, password : string) {
    localStorage.clear();
    // in case of success it eneters the .then bracket and other wise it enters the err and raise an alert message
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
        localStorage.setItem('token','true');
      
       this.flag_logged_in = true;
       
      //  this.user_try();
       console.log(this.flag_logged_in);
       this.router.navigate(['/home']);

    }, err => {
        alert(err.message);
        this.flag_logged_in = false;
        this.router.navigate(['/login']);
        localStorage.setItem('token','false');
        console.log("tokennn ", localStorage.getItem('token'))
    })
    
  }

  // this is the method used to verify if a user is logged in or not and it's used in the AUTH GAURD 
  //so that only logged in users can navigate to cart page

  isLoggedIn(){
    const loggedin = localStorage.getItem('token');
    if (loggedin == 'true'){
    this.flag_logged_in = true;
    }
    else{
     this.flag_logged_in = false;
      
    }
    return  this.flag_logged_in;
  }
  
 
  // this is the method used to verify if a user is logged in then it store the usrr ID
  //and comapre it to the ID of the admin if it matches return true else return false
  //so that only admin can access the ADD PRODUCT page
 isAdmin(){
  
  this.fireauth.onAuthStateChanged(user => {
   
    if (user) {
     
      this.uiiid = JSON.stringify(user.uid)
      localStorage.setItem('userID' ,JSON.stringify(user.uid) )
     
      }
  
  else{
    
  }

  
  });
  if (localStorage.getItem('userID') === '"l6S2SyW0kQV2gZ09dI2DJjjB9903"' ){
    console.log("yess")
    return true;
  }
  else{
    return false;
  }

 
}
 
  // register method
  register(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      alert('Registration Successful');
      //this.sendEmailForVarification(res.user);
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }
  // logout method empty the local storage including the user ID and the token
  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      console.log("user signed out")
    //  localStorage.setItem('userID' , data.uid)
    localStorage.removeItem('userID');
    console.log("removed");
    localStorage.clear();
  //  this.user_try()
    }, err => {
      alert(err.message);
    })
  }

  /* 
  user_try(){
      
      this.fireauth.onAuthStateChanged(user => {
     
        if (user) {
        
          return true;
          }
      
      else{
        return false;
      }
       
      });
     if(localStorage.getItem("userID")){
       return true;
     }
     else{
       return false;
     }
  }*/

}
