import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  constructor( private alertCtrl: AlertController)
  {

    
    

  }

  
  singleValue:number;

  async presentAlert(msg:string) {
    const alert = await this.alertCtrl.create ({
      
    message: msg
   });

    await alert.present ();

  }

  onStartButton(){
    
  }

  ionViewWillEnter(){
    document.getElementById("moodArrow").setAttribute("style", "display:block; margin-left:" +(this.singleValue*6.2+60).toString()+"px;");
    document.getElementById("moodArrowText").setAttribute("style", "display:block; margin-left:" +(this.singleValue*6.2+30).toString()+"px;");
  }

  rangeChange(){
    
    console.log (this.singleValue);

    document.getElementById("moodArrow").setAttribute("style", "display:block; margin-left:" +(this.singleValue*6.2+60).toString()+"px;");
    document.getElementById("moodArrowText").setAttribute("style", "display:block; margin-left:" +(this.singleValue*6.2+30).toString()+"px;");
    
  }

}
