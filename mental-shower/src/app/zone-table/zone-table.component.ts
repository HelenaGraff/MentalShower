import { Component, OnInit, Input, SimpleChange, SimpleChanges, ɵɵpureFunction1 } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Student } from '../student';
import {Storage} from '@ionic/storage-angular';
import { AlertController, ModalController } from '@ionic/angular';
import { GroupInfoPagePage } from '../group-info-page/group-info-page.page';
import { ZonesPage } from '../zones/zones.page';
import { NgZone  } from '@angular/core';
import { promise } from 'selenium-webdriver';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-zone-table',
  templateUrl: './zone-table.component.html',
  styleUrls: ['./zone-table.component.scss'],
})
export class ZoneTableComponent implements OnInit {
  @Input("matchPercent") matchPercent;
  @Input("avatar1url") avatar1url;
  @Input("avatar2url") avatar2url;
  @Input("avatar3url") avatar3url;
  @Input("avatar4url") avatar4url;
 
  


   private _student1id:string;
   private  _student2id:string;
   private _student3id:string;
   private _student4id:string;

   @Input("student1id") student1id:string;
   @Input("student2id") student2id:string;
   @Input("student3id") student3id:string;
   @Input("student4id") student4id:string;

   ngOnChanges(changes:SimpleChanges){
    this.firebaseService.read_students().snapshotChanges().subscribe(res=>{
     
      console.log("stuff changed");
     
      this.students=res.map(r=>{
        return{
          id:r.payload.doc.id,
          ...r.payload.doc.data() as Student
        } 
      })

      this.students.forEach(i=>{
        if (i.id==this.student1id){
          this.avatar1url=i.ProfilePicURL;
        }
        if (i.id==this.student2id){
          this.avatar2url=i.ProfilePicURL;
        }
        if (i.id==this.student3id){
          this.avatar3url=i.ProfilePicURL;
        }
        if (i.id==this.student4id){
          this.avatar4url=i.ProfilePicURL;
        }
        
        



      })
    }
    
    )
   }
  

  @Input("zoneId") zoneId:string;
  constructor(public firebaseService:FirebaseService, public storage:Storage, public modalController: ModalController, public alertController:AlertController) {
    	storage.create();
    this.avatar1url="https://ionicframework.com/docs/demos/api/avatar/avatar.svg";
    this.avatar2url="https://ionicframework.com/docs/demos/api/avatar/avatar.svg";
    this.avatar3url="https://ionicframework.com/docs/demos/api/avatar/avatar.svg";
    this.avatar4url="https://ionicframework.com/docs/demos/api/avatar/avatar.svg";

    


   }
students:Student[];
  ngOnInit() {
    this.firebaseService.read_students().snapshotChanges().subscribe(res=>{
     
     
      this.students=res.map(r=>{
        return{
          id:r.payload.doc.id,
          ...r.payload.doc.data() as Student
        } 
      })

      this.students.forEach(i=>{
        if (i.id==this.student1id){
          this.avatar1url=i.ProfilePicURL;
        }
        if (i.id==this.student2id){
          this.avatar2url=i.ProfilePicURL;
        }
        if (i.id==this.student3id){
          this.avatar3url=i.ProfilePicURL;
        }
        if (i.id==this.student4id){
          this.avatar4url=i.ProfilePicURL;
        }
        
        


       
    
      })
      
     
      
    }
    
    )
    this.matching();

    
    
  }

matching(){



let airQualitySum:number;
let temperatureSum:number;
let humiditySum:number;
let airSpeedSum:number;
let studentCount:number;



airQualitySum=0;
temperatureSum=0;
humiditySum=0;
airSpeedSum=0;
studentCount=0;

let currentQuality:number;
let currentTemperature:number;
let currentHumidity:number;
let currentAirspeed:number;
let avgAvg:number;
avgAvg=0;
console.log("starting step 1 ");
Promise.all([
  this.storage.get("currentAirQuality"),
  this.storage.get("currentTemperature"),
  this.storage.get("currentHumidity"),
  this.storage.get("currentAirSpeed")
]).then((res)=>{
  console.log("step 2: "+res);
  currentQuality= res[0];
 currentTemperature=res[1];
  currentHumidity=res[2];
  currentAirspeed=res[3];
}).then(()=>{
Promise.all([

this.firebaseService.read_student_with_id(this.student1id),
this.firebaseService.read_student_with_id(this.student2id),
this.firebaseService.read_student_with_id(this.student3id),
this.firebaseService.read_student_with_id(this.student4id)
]).then((res)=>{
  console.log("step 3 :"+res);
  res.forEach(x=>{
    if (x!=null){
    x.snapshotChanges().subscribe((res)=>{
      studentCount++;
   
     
     airQualitySum+= res.payload.data().CurrentAirQuality;
     airSpeedSum+= res.payload.data().CurrentAirSpeed;
     temperatureSum+= res.payload.data().CurrentTemperature;
     humiditySum+= res.payload.data().CurrentHumidity;
     
    
     
     avgAvg+=airQualitySum;
     avgAvg+=airSpeedSum;
     avgAvg+=temperatureSum;
     avgAvg+=humiditySum;
    avgAvg/=studentCount+1;
      console.log("average:"+avgAvg);
   this.matchPercent=((100*avgAvg)/(currentAirspeed+currentHumidity+currentQuality+currentTemperature));
    //  this.matchPercent=avgAvg;
      this.matchPercent=Math.trunc(this.matchPercent%101);


    })
    



    
    }})
  })
  
  
})







}

async saveAlert(){
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    
    header: 'Confirmation',
    message: '<img src = "/assets/icon/bad-breath.svg"; width="35px"; height="35px"> Are you sure you want to save the preference?',
    buttons: ['OK', 'Cancel']
  });

  await alert.present();
}



  joinZone(){

    this.storage.get("currentZone").then((res)=>{
        
        this.storage.set("currentZone",this.zoneId);
      
  })

    console.log("joining zone"+this.zoneId);
    this.storage.get("userId").then(res=>{

      console.log(res);


      if (this.student1id.length<2){
        this.firebaseService.delete_seat_with_user_id(res);
        this.firebaseService.update_zone(this.zoneId,{Seat1:res});
        this.storage.get("pictureUrl").then(res=>{
          this.avatar1url=res;
        })
        
      }   
      else
      if (this.student2id.length<2){
        this.firebaseService.delete_seat_with_user_id(res);
        this.firebaseService.update_zone(this.zoneId,{Seat2:res});
        this.storage.get("pictureUrl").then(res=>{
          this.avatar2url=res;
        })
      }
      else
      if (this.student3id.length<2){
        this.firebaseService.delete_seat_with_user_id(res);
        this.firebaseService.update_zone(this.zoneId,{Seat3:res});
        this.storage.get("pictureUrl").then(res=>{
          this.avatar3url=res;
        })
      }
      else
      if (this.student4id.length<2){
        this.firebaseService.delete_seat_with_user_id(res);
        this.firebaseService.update_zone(this.zoneId,{Seat4:res});
        this.storage.get("pictureUrl").then(res=>{
          this.avatar4url=res;
        })
      }
      
      
      

  
     
    })
  }

 async callModal(){
    const modal =await this.modalController;
   modal.dismiss();
   
   const modal2 = await this.modalController.create ({
    component: ZonesPage,
});
modal2.present();
  }

  

}
