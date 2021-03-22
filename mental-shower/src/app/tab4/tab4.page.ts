import { Component, OnInit } from '@angular/core';
import {FirebaseService} from 'src/app/firebase.service';
import {Storage} from '@ionic/storage-angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  firstName:string;

  constructor(firebase:FirebaseService,public storage:Storage) {
      storage.create();    
    }

  ngOnInit() {
  }


  ionViewDidEnter() {
    console.log("TabX is exited");
    this.storage.get("loggedIn").then(res=>{
      if (res==true){
        this.storage.get("name").then(res=>{
          this.firstName=res;
        })
      }
      else {
        this.firstName="Hi there";
      }
    })
  }
}
