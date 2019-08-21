import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User,auth } from 'firebase';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {


  email;
  pass;
  obj;
  user;
  constructor(public afAuth: AngularFireAuth,private post : Router) { }


  login() {
   // this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  this.user = firebase.auth().currentUser;
 // this.user1 = firebase.auth().currentUser;
  console.log(this.email);
    console.log(this.pass);

  
  
    this.obj = this.afAuth.auth.createUserWithEmailAndPassword(this.email,this.pass).catch((error) =>{
      
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      
    });
    this.user.sendEmailVerification().then(function(){
      console.log("Email sent");
    }).catch(function(err){
      console.log("An error happened");
    })

   this.post.navigateByUrl("/sign-in");
    
    // console.log(this.user.displayName);  
    // console.log(this.user.email);  
    // console.log(this.user.uid);  
     console.log(this.obj);
  }
  logout() {
    this.afAuth.auth.signOut();
  }


  ngOnInit() {
  }

}
