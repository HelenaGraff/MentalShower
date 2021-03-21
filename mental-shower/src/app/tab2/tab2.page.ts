import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  constructor( private alertCtrl: AlertController)
  {}

  async presentAlert(msg:string) {
    const alert = await this.alertCtrl.create ({
      
    message: msg
   });

    await alert.present ();

  }

}
