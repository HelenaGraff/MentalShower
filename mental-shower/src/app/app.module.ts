import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

import { HttpClientModule } from '@angular/common/http';
import {MySqlServiceService} from './my-sql-service.service';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage-angular/';
import { ZoneTableComponent } from './zone-table/zone-table.component';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebase), AngularFireAuthModule, AngularFireDatabaseModule,
    AngularFirestoreModule, HttpClientModule, IonicStorageModule, IonicStorageModule.forRoot(), SocialLoginModule],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '1062121084965-h6es6euj24dqq3133ifhscbj2t0bs9gk.apps.googleusercontent.com'
          )
        }
      ]
    } as SocialAuthServiceConfig,
  }    ,
    
    
    
    Facebook, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ],
  bootstrap: [AppComponent],
})
export class AppModule {}
