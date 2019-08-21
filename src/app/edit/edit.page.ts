import { Component, OnInit, Input } from '@angular/core';
import { GroceryService } from '../service/grocery.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

@Input() nkey
@Input() nPrice
@Input() nType
@Input() name1



  ObjRef = {
    key : '',
    name : '',
    price : 0,
    type : ''
  }


 



  constructor(private list : GroceryService,private addr: ActivatedRoute,private post :Router) { }

  update1(item,key){
    this.list.update(item);
    this.post.navigateByUrl('/home');
    console.log(item.name)
    console.log(item.Price)
    console.log(item.Type)
  }
  delete1(key){
    alert("Are you sure you want to delete the Grocery item ");
    this.list.delete(key);
    console.log("record vanished ..")
    this.post.navigateByUrl('/home');
  }

  ngOnInit() {
    
    
    this.addr.queryParams.subscribe(data => {
      console.log(data)
      console.log(this.ObjRef)
      
      this.name1 = data.name1
      


      this.ObjRef.name =data.name1;
      this.ObjRef.price =data.nPrice;
      this.ObjRef.type =data.nType;
      this.ObjRef.key =data.nkey;
      this.nType = data.nType
      this.nkey = data.nkey
      this.nPrice = data.nPrice

      console.log(this.name1)
      console.log(this.nPrice)
      console.log(this.nType)
      console.log(this.nkey)

     
  })

}





}
