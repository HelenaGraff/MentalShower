import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ZoneTableComponent } from '../zone-table/zone-table.component';

import { ZonesPage } from './zones.page';

describe('ZonesPage', () => {
  let component: ZonesPage;
  let fixture: ComponentFixture<ZonesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonesPage ],
      imports: [IonicModule.forRoot(), ZoneTableComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ZonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
