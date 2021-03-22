import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZonesPageRoutingModule } from './zones-routing.module';

import { ZonesPage } from './zones.page';

import {ZoneTableComponent} from 'src/app/zone-table/zone-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZonesPageRoutingModule
  ],
  declarations: [ZonesPage, ZoneTableComponent]
})
export class ZonesPageModule {}
