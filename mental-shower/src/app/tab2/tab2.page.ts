import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Storage} from '@ionic/storage-angular';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  constructor( private alertCtrl: AlertController, private storage:Storage, private firebase:FirebaseService)
  {
    storage.create();
    
    

  }

  
  singleValue:number;

  airSpeed:number;
  temperature:number;
  humidity:number;
  airQuality:number;

  async presentAlert(msg:string) {
    const alert = await this.alertCtrl.create ({
      
    message: msg
   });

    await alert.present ();

  }

  onStartButton(){
    
  }

  ionViewWillEnter(){
 
  }

  rangeChange(){
    
    console.log (this.airSpeed);

    document.getElementById("moodArrow").setAttribute("style", "display:block; margin-left:" +(this.airSpeed*6.2+60).toString()+"px;");
    document.getElementById("moodArrowText").setAttribute("style", "display:block; margin-left:" +(this.airSpeed*6.2+30).toString()+"px;");
    
  }

  airSpeedRelease(){
    this.storage.set("currentAirSpeed",this.airSpeed);
    this.storage.get("userId").then(res=>{      
      this.firebase.update_student_with_id({CurrentAirSpeed:this.airSpeed},res);
    });
   
  }
  temperatureRelease(){

    this.storage.set("currentTemperature",this.temperature);
    this.storage.get("userId").then(res=>{      
      this.firebase.update_student_with_id({CurrentTemperature:this.temperature},res);
    });
    

  }
  humidityRelease(){
    this.storage.set("currentHumidity",this.humidity);
    this.storage.get("userId").then(res=>{      
      this.firebase.update_student_with_id({CurrentHumidity:this.humidity},res);
    });
  }
  airQualityRelease(){
    this.storage.set("currentAirQuality",this.airQuality);
    this.storage.get("userId").then(res=>{      
      this.firebase.update_student_with_id({CurrentAirQuality:this.airQuality},res);
    });
  }

}
