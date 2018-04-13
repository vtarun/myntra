import { BrowserModule } from '@angular/platform-browser';
// import { HttpClient } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { WomenPage } from '../pages/women/women';
import { LivingPage } from '../pages/living/living';
import { MenPage } from '../pages/men/men';
import { TravelPage } from '../pages/travel/travel';
import { GiftCardPage } from '../pages/gift-card/gift-card';
import { ThemeStorePage } from '../pages/theme-store/theme-store';
import { KidsPage } from '../pages/kids/kids';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';
import { HeaderComponent } from '../components/header/header';
import { SeachModalPage } from '../pages/seach-modal/seach-modal';
import { LoginPage } from '../pages/login/login';

import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { FileOpener } from '@ionic-native/file-opener';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { Geolocation } from '@ionic-native/geolocation';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { SettingsPage } from '../pages/settings/settings';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WomenPage,
    MenPage,
    TravelPage,
    LivingPage,
    GiftCardPage,
    ThemeStorePage,
    KidsPage,
    HeaderComponent,
    SeachModalPage,
    GeolocationPage,
    LoginPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WomenPage,
    MenPage,
    TravelPage,
    LivingPage,
    GiftCardPage,
    KidsPage,
    SeachModalPage,
    ThemeStorePage,
    GeolocationPage,
    LoginPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Base64ToGallery,
    FileChooser,
    FileOpener,
    FilePath,
    File,
    FileTransfer,
    MediaCapture,
    Geolocation,   
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationProvider
  ]
})
export class AppModule {}
