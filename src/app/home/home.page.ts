import { Component } from '@angular/core';
import { GroceryService } from '../service/grocery.service';


import { AngularFireAuth } from '@angular/fire/auth';
import { User,auth } from 'firebase';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
num :number;
x :number;
cat;
obj;
itemList;

name1;

nkey;
nPrice;
nType;


name;

item = {
  name : "0",
  price : 0,
  type : ""
}
constructor( private list : GroceryService, private para: Router,public afAuth: AngularFireAuth) {

  // this.cat = this.list.getData();
  this.cat = this.list.getInfo();

  this.list.getInfo().subscribe(data => {
    
   this.itemList = data.map ( e => {
     return{
       key: e.payload.doc.id,
       ...e.payload.doc.data()
     } as Item;
   });
  })
  this.name = this.afAuth.auth.currentUser;
}


  // this.obj = this.itemList;
//this.nPrice = list.name


update1(key){
  this.list.update(this.item);
}
ngOnInit() {
  // this.para.queryParams.subscribe(data => {
  //   console.log(data)


  //   this.displayTime = data.displayTime
  //   console.log(this.displayTime),
  }




 clicked(Item){
  this.nkey = Item.key;
  this.name1 = Item.name;
  this.nType = Item.type;
  this.nPrice = Item.price;
     console.log(this.itemList);
 return this.para.navigate(['/edit'], {queryParams: {name1 :this.name1,nkey :this.nkey,nType :this.nType,nPrice :this.nPrice,}}); 
//  console.log(this.nkey);
//  console.log(this.nPrice);
//  console.log(this.nPrice);

 }
}

