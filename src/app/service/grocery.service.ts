import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFirestoreDocument} from '@angular/fire/firestore'
import { AlertController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  private itemDoc: AngularFirestoreDocument<Item>; // < *class_name* >

  writePost;
  objData;
  constructor (private dog : AngularFirestore) {
    
  }

  // getData(){
  //   return this.dog.collection('Grocery').valueChanges();
  // }

  post(item,alert) {

    this.writePost = this.dog.collection<any>('Grocery');
    this.writePost.add(item).then(() =>{

      console.log("successful");
    });
    
    
    }
      
    getInfo(){
      return this.dog.collection('Grocery').snapshotChanges();
    }

    update(item){
 
      this.itemDoc = this.dog.doc<Item>('Grocery/' + item.key);
      this.itemDoc.update(item);
      console.log("updated");
    }

    delete(key){

    return this.dog.doc<Item>('Grocery/' + key).delete();

  }

  get windowRef(){
    return window
  }

    // update0(item,key){
    //   //  item.name ="StrawBerry";
    //   //  item.price = 100;
    //   //  item.type ="Fruit";

    //   this.itemDoc = this.dog.doc<Item>('Grocery/' + key);
    //   this.itemDoc.update(item);
    // }
}



