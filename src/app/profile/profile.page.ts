import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User,auth } from 'firebase';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user;
  url;
  mail;
  userName;
  phone;

  constructor(public afAuth: AngularFireAuth, private post :Router) { }

  update(){

    this.user = firebase.auth().currentUser;

  
  this.user.updateProfile({
    displayName: this.userName,
    photoURL: this.url
  }).then(function() {
    console.log("Update successful.") 
  }).catch(function(error) {
     console.log("An error happened.") 
  });

  }

  update22(){

    this.user = this.afAuth.auth.currentUser;

  
    this.user.displayName = this.userName;
    this.user.phoneNumber = this.phone;
    this.user.email = this.mail;
    this.user.photoURL =this.url;
    console.log("Update successful.");
    this.post.navigateByUrl("/sign-in");
    location.reload();
  }

  ngOnInit() {
  }

}
