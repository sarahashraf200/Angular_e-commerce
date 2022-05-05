import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  flag_login : any;
  flag_logged_in : boolean = false;

  constructor(private fireauth : AngularFireAuth , private router : Router) { }

  login(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
        localStorage.setItem('token','true');
        //console.log(res.user?.emailVerified)
       console.log("tmam");
       this.flag_login = email
       this.flag_logged_in = true;
       console.log(this.flag_login);
       this.router.navigate(['/home']);

    }, err => {
        alert(err.message);
        this.flag_logged_in = false;
        this.router.navigate(['/login']);
    })
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
