import { Component } from '@angular/core';
import {FirebaseService} from 'src/app/firebase.service';
import {Storage} from '@ionic/storage-angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  firstName:string;



  constructor(firebase:FirebaseService,public storage:Storage) {
    storage.create();
  }

  ionViewDidLoad() 
  {  

  }

  ionTabsWillChange()
  { 
    
  }

  ionViewDidEnter() 
  {
    console.log("TabX is exited");
    this.storage.get("loggedIn").then(res=>{
      if (res==true){
        this.storage.get("name").then(res=>{
          this.firstName=res;
        })
      }
      else {
        this.firstName="there";
      }
    })
}

}
