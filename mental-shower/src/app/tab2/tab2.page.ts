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

  async presentAlert() {
    const alert = await this.alertCtrl.create ({
    message: 'Air Speed parameter allows you to influence the ventilator’s intensity.'
   });

    await alert.present ();

  }

}
