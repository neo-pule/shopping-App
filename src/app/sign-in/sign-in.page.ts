import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User,auth, UserInfo } from 'firebase/app';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Window } from 'selenium-webdriver';
import { AlertController } from '@ionic/angular';
import { GroceryService } from '../service/grocery.service';
import { FirebaseAuthentication } from 'firebase/firebase';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  [x: string]: any;


  email:string;
  pass :string;
obj1;
user;
user1 :any;
phone;
OTP :string  ;
applicationVerifier;
verificationCode;

isDisabled : boolean =false;
code;
provider;
token;
twiiterProvider;
userData;
userPass;
switch : boolean =true;
  constructor(public afAuth: AngularFireAuth,private post : Router, private win: GroceryService,public alertController: AlertController) {
  console.log(this.switch);
  console.log(this.OTP);
   this.provider = new firebase.auth.FacebookAuthProvider();
    this.twiiterProvider = new firebase.auth.TwitterAuthProvider();
 //  this.provider.addScope('user_friends');
  // this.provider.addScope('user_profile');
   }
   twitterL(){
    firebase.auth().signInWithRedirect(this.twiiterProvider);
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        // var token = result.credential.accessToken;
        // var secret = result.credential.secret;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
   }

   facebookL(){
    firebase.auth().signInWithRedirect(this.provider);
    firebase.auth().getRedirectResult().then( result => {
      if (result.credential) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // this.token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
    }).catch( error => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
   }

   sendCode(){
    
    this.code = this.OTP;

     //.then(function(confirmationResult) {
      //    this.verificationCode = alert('Please enter the verification ' +
      //       'code that was sent to your mobile device.');
        // return confirmationResult.confirm(this.verificationCode).then ( function(result) {
        //   this.user1 = result.user;
        //   console.log("User signed in successfully.!!")
        // }). catch( function(err){
        //   console.log("User couldn't sign in (bad verification code?) !!")
        // });
      // });
   }



   toggleShow(){
    this.switch = false;
    console.log(this.switch);

   }
   toggleHide(){
    this.switch = true;
    console.log(this.switch);
   }

   async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Please enter the verification ' + 'code that was sent to your mobile device.',
      buttons: ['OK']
    });

    await alert.present();
  }


listen(){
  if(this.phone = null){
    this.isDisabled =true;
  }
  else{
    this.isDisabled =false;
  }

}

   login(){

    

      this.user = firebase.auth().currentUser;


        console.log(this.user);
      //    console.log(this.user.phoneNumber);
      //    console.log(this.user.email);
      //    console.log(this.user.uid);
    //this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
   // alert(this.afAuth.auth.currentUser.uid + this.afAuth.auth.currentUser.email );
    this.afAuth.auth.signInWithEmailAndPassword(this.email,this.pass).then(() =>{
      //location.reload();
      if(this.afAuth.auth.currentUser.uid){
       // this.post.navigateByUrl("/sign-in/home");
        console.log("Successful Signed In");
        console.log(this.afAuth.auth.currentUser.phoneNumber);
        console.log(this.afAuth.auth.currentUser.displayName);
        console.log(this.afAuth.auth.currentUser);
      }
      else{
        console.log("Error found while Signing In");
      }
     //this.post.navigateByUrl("/sign-in/home");
    });
    
  }


  loginP(){

    firebase.auth().useDeviceLanguage();
    // To apply the default browser preference instead of explicitly setting it.
    // firebase.auth().useDeviceLanguage();

    
    
    //  window.applicationVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    
  return firebase.auth().signInWithPhoneNumber(this.phone, this.applicationVerifier)
         .then ( result => {
           this.user1 = result;
      //     result.confirm(this.OTP);
      //     console.log("User signed in successfully.!!")
      //     this.post.navigateByUrl("/home");
      //     console.log(this.user1)
          
        }). catch( result =>{
           console.log("User couldn't sign in (bad verification code?) !!")
           console.log(result)
      console.log("Blue  Magic")
       });
    
  }
  loginCode(){

    
    console.log(this.OTP)
    this.user1.confirm(this.OTP)
      . catch( function(err){
      console.log("hello there22")
      console.log("User couldn't sign in (bad verification code?) !!")
      console.log(this.user1)
    
  });

  console.log("END there")
    // result.confirm(this.OTP);
    // this.user1.confirmationResult.confirm(this.OTP).then( result =>{
    //   console.log("Correct Pin")
    //   this.post.navigateByUrl("/home");
    // }).catch( error => console.log(error , "incorrect Code"))


  }



  logout() {
    this.afAuth.auth.signOut().then(() =>{
      location.reload();
      
    });;
  }


  ngOnInit() {
    
  
  
    // this.applicationVerifier.RecaptchaVerifier.render();
    this.applicationVerifier = new firebase.auth.RecaptchaVerifier(
      'recaptcha-container');
  }

}
