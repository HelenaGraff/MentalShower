import { Component, OnInit, Input} from '@angular/core';
import {ZonesPage} from 'src/app/zones/zones.page';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-classroom-card',
  templateUrl: './classroom-card.component.html',
  styleUrls: ['./classroom-card.component.scss'],
})
export class ClassroomCardComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  @Input("classroomName") classroomName;
  @Input("cityName") cityName;
  @Input("className") className; 


  
async ChooseClassroom() {

  console.log ('blabla');
  const modal = await this.modalController.create ({
     component: ZonesPage,
});
  return await modal.present();
}

}
