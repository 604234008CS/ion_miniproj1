import { MovieProvider } from './../providers/movie/movie';
import { MoviemenuPage } from './../pages/moviemenu/moviemenu';
import { JsonMenuPage } from './../pages/json-menu/json-menu';
import { BarcodeScannerPage } from './../pages/barcode-scanner/barcode-scanner';
import { FlashlightPage } from './../pages/flashlight/flashlight';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Flashlight } from '@ionic-native/flashlight';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClientModule } from '@angular/common/http';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SocialSharing } from '@ionic-native/social-sharing';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FlashlightPage,
    BarcodeScannerPage,
    JsonMenuPage,
    MoviemenuPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FlashlightPage,
    BarcodeScannerPage,
    JsonMenuPage,
    MoviemenuPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,Flashlight,BarcodeScanner,TextToSpeech,SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider
    
  ]
})
export class AppModule {}
