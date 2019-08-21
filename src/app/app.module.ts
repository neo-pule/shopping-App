import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFirestoreModule}  from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { FormsModule} from '@angular/forms'
import { SignInPage } from './sign-in/sign-in.page';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { AngularFireAuth } from '@angular/fire/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCINlOwFVxt0D-Jljp9qj4NGMkPV-nlHhg",
  authDomain: "shoppingapp-ec5a2.firebaseapp.com",
  databaseURL: "https://shoppingapp-ec5a2.firebaseio.com",
  projectId: "shoppingapp-ec5a2",
  storageBucket: "shoppingapp-ec5a2.appspot.com",
  messagingSenderId: "1054360640498",
  appId: "1:1054360640498:web:cc5c53a88e29f014"
};

@NgModule({
  declarations: [SignInPage,AppComponent],
  entryComponents: [],
  imports: [FormsModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFirestoreModule,AngularFireModule.initializeApp(firebaseConfig)],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    AngularFireAuthGuard,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
