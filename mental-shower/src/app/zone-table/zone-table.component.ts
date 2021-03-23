import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zone-table',
  templateUrl: './zone-table.component.html',
  styleUrls: ['./zone-table.component.scss'],
})
export class ZoneTableComponent implements OnInit {
  @Input("matchPercent") matchPercent;
  @Input("avatar1url") avatar1url;
  @Input("avatar2url") avatar2url;
  @Input("avatar3url") avatar3url;
  @Input("avatar4url") avatar4url;
  constructor() {

    this.avatar1url="https://ionicframework.com/docs/demos/api/avatar/avatar.svg";
    this.avatar2url="https://ionicframework.com/docs/demos/api/avatar/avatar.svg";
    this.avatar3url="https://ionicframework.com/docs/demos/api/avatar/avatar.svg";
    this.avatar4url="https://ionicframework.com/docs/demos/api/avatar/avatar.svg";
   }

  ngOnInit() {}

}
