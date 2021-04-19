import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ZoneTableComponent } from 'src/app/zone-table/zone-table.component';
import { FirebaseService } from '../firebase.service';
import { MySqlServiceService } from '../my-sql-service.service';
import { MySqlZone } from '../my-sql-zone';
import { ZoneTable } from '../zone-table';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.page.html',
  styleUrls: ['./zones.page.scss'],

})
export class ZonesPage implements OnInit {

  constructor(public modalController: ModalController, public mySqlService:MySqlServiceService, public firebaseService:FirebaseService) { 

  
   
   

  }
  roomId;
  
  mySqlZones:MySqlZone[]
  zones:ZoneTable[]

  zone1:ZoneTable[]
  zone2:ZoneTable[]
  mySqlZone1:MySqlZone[]
  mySqlZone2:MySqlZone[]

  ngOnInit() {
  let  zone1:ZoneTable[]=[{},{}];
  let  zone2:ZoneTable[]=[{},{}];

  let mySqlZone1:MySqlZone[]=[{},{}];
  let mySqlZone2:MySqlZone[]=[{},{}];

  this.mySqlZones=[];
  this.mySqlService.getMySqlZonesWithId(this.roomId).subscribe(data=>{
    data.forEach(item=>{
      this.mySqlZones.push(item);
      console.log(item.id);
    })
console.log ("here");

mySqlZone1[0]=this.mySqlZones[0];
    mySqlZone1[1]=this.mySqlZones[1];
    mySqlZone2[0]=this.mySqlZones[2];
    mySqlZone2[1]=this.mySqlZones[3];

    mySqlZone1.forEach(x=>{
      console.log("hello:"+x.id);
    })

    mySqlZone2.forEach(x=>{
      console.log(x.id);
    })

    this.zone1=zone1;
    this.zone2=zone2;

    this.mySqlZone1=mySqlZone1;
    this.mySqlZone2=mySqlZone2;



  });  

    this.firebaseService.read_zones().ref.where("ClassroomID","==",this.roomId).get().then(res=>{
      console.log("zones:");
    res.forEach(element => {
   console.log("zone:"+element.data());
    });



/*
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

    */
    ///////////////////////////////////////////////

    
    })

   
  }

seeZones(){
  
}



async closeTab() {

  console.log('Close');


    const modal = await this.modalController.dismiss();
}
}