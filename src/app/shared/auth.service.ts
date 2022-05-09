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
  
  user_try(){
   this.fireauth.authState.subscribe( user =>{
      if (user) { this.user_id = user.uid }
    });
    console.log("USER ID" , this.user_id);
    if (this.user_id == "xIYFj1lGItQePqAFEli8qDN61Zr1"){
      return true;
    }
    else{
      return false;
    }
  }
 final_try(){
  this.fireauth.onAuthStateChanged(user => {
    localStorage.clear()
    if (user) {
      localStorage.clear()
      this.uiiid = JSON.stringify(user.uid)
      localStorage.setItem('userID' ,JSON.stringify(user.uid) )
       if (localStorage.getItem('userID') === '"xIYFj1lGItQePqAFEli8qDN61Zr1"'){
         console.log("yess");
       }
         
  }
  else{
    
  }

  
  });
  if (localStorage.getItem('userID') === '"xIYFj1lGItQePqAFEli8qDN61Zr1"' ){
    console.log("yess")
    return true;
  }
  else{
    return false;
  }

 // console.log("???" ,this.uiiid)
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
    //  localStorage.setItem('userID' , data.uid)
    localStorage.removeItem('userID');
    localStorage.clear();
    }, err => {
      alert(err.message);
    })
  }

}
