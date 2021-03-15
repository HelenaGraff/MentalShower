import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertCtrl: AlertController) {}
  async onIconClick(){
    const alert = await this.alertCtrl.create ({
      message:"message"
     });
  
      await alert.present ();
  }
}
