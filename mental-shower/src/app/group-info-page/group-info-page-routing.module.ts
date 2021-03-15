import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupInfoPagePage } from './group-info-page.page';

const routes: Routes = [
  {
    path: '',
    component: GroupInfoPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupInfoPagePageRoutingModule {}
