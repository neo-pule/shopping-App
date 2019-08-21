import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceryService } from '../service/grocery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  item = {
    name : "",
    price : 0,
    type : ""
  }
  constructor( private alet :AlertController, private obj :GroceryService, private post :Router) { }

  ngOnInit() {

 console.log(this.item);
  }

  submit(){
    this.obj.post(this.item,this.alet);
    this.post.navigateByUrl("/home");
  }
  

}
