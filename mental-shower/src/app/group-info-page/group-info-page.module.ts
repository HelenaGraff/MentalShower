import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupInfoPagePageRoutingModule } from './group-info-page-routing.module';

import { GroupInfoPagePage } from './group-info-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupInfoPagePageRoutingModule
  ],
  declarations: [GroupInfoPagePage]
})
export class GroupInfoPagePageModule {}
