import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-group-info-page',
  templateUrl: './group-info-page.page.html',
  styleUrls: ['./group-info-page.page.scss'],
  
})
export class GroupInfoPagePage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  
    async onClick() {
      
    console.log("i just want to log");
      
      
      const modal = await this.modalController.dismiss();
    
      
    
     
      
    
    }
  
}
