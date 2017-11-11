import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './login/login.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';

import {AuthenticationGuard} from './services/authenticationGuard.service';
import {AuthenticationService} from './services/authentication.service';
import {ImageService} from './services/image.service';
import {UploadService} from './services/upload.service';

import {appRoutes} from '../routes';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageComponent,
    NavbarComponent,
    UploadComponent,
    LoginComponent,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthenticationGuard, AuthenticationService, ImageService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
