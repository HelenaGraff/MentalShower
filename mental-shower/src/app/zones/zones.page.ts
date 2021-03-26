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
  zone1:ZoneTable[]
  zone2:ZoneTable[]
  

  ngOnInit() {
  let  zone1:ZoneTable[]=[{},{}];
  let  zone2:ZoneTable[]=[{},{}];
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

    zone1[0]=this.zones[0];
    zone1[1]=this.zones[1];
    zone2[0]=this.zones[2];
    zone2[1]=this.zones[3];

    zone1.forEach(x=>{
      console.log(x.id);
    })

    zone2.forEach(x=>{
      console.log(x.id);
    })

    this.zone1=zone1;
    this.zone2=zone2;
    })

   
  }

seeZones(){
  
}



async closeTab() {

  console.log('Close');


    const modal = await this.modalController.dismiss();
}
}