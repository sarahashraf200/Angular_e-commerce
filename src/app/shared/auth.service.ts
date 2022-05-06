import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, observable } from 'rxjs';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ThisReceiver } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  flag_login : any;
  flag_logged_in : boolean = false;
 




  

  // Set current user in your session after a successful login
   
   


  constructor(private fireauth : AngularFireAuth , private router : Router) {
   
      
  
   }

  login(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
        localStorage.setItem('token','true');
        //console.log(res.user?.emailVerified)
        console.log("tokennn ", localStorage.getItem('token'))
       console.log("tmam");
       this.flag_login = email
       this.flag_logged_in = true;
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
  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      console.log("user signed out")
    }, err => {
      alert(err.message);
    })
  }

}
