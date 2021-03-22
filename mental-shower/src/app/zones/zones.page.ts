import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.page.html',
  styleUrls: ['./zones.page.scss'],
})
export class ZonesPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }


async closeTab() {

  console.log('Close');

  
    const modal = await this.modalController.dismiss();
}
}