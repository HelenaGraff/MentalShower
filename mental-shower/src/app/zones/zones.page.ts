import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ZoneTableComponent } from 'src/app/zone-table/zone-table.component';
import { FirebaseService } from '../firebase.service';
import { ZoneTable } from '../zone-table';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.page.html',
  styleUrls: ['./zones.page.scss'],

})
export class ZonesPage implements OnInit {

  constructor(public modalController: ModalController, public firebaseService:FirebaseService) { 



   

  }
  roomId;
  zones:ZoneTable[]
  ngOnInit() {
    this.firebaseService.read_zones().ref.where("ClassroomID","==",this.roomId).get().then(res=>{
      console.log("zones:");
    res.forEach(element => {
   console.log("zone:"+element.data());
    });

   this.zones= res.docs.map(e=>{
      return{
        id:e.id,
        ...e.data() as ZoneTable
      }
    });
    console.log(this.zones);
    })

   
  }

seeZones(){
  
}

async closeTab() {

  console.log('Close');


    const modal = await this.modalController.dismiss();
}
}