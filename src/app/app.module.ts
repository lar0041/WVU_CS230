import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListenNowBodyComponent } from './listen-now-body/listen-now-body.component';
import { Cards1Component } from './cards1/cards1.component';
import { Carousel1Component } from './carousel1/carousel1.component';
import { FooterComponent } from './footer/footer.component';
import { TopBarComponent } from './header/top-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AlbumBodyComponent } from './album-body/album-body.component';
import { BrowseBodyComponent } from './browse-body/browse-body.component';
import { RadioBodyComponent } from './radio-body/radio-body.component';
import { PlaylistBodyComponent } from './playlist-body/playlist-body.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';
import { EditUserInfoComponent } from './header/edit-user-info.component';
import { FormsModule } from '@angular/forms';
import { EditCardInfoComponent } from './header/edit-card-info.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent, TopBarComponent,
    SideBarComponent, FooterComponent, 
    Cards1Component, Carousel1Component, 
    LayoutComponent, ListenNowBodyComponent,
    AlbumBodyComponent, BrowseBodyComponent,
    RadioBodyComponent, PlaylistBodyComponent,
    UserInfoComponent, EditUserInfoComponent,
    EditCardInfoComponent, AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'appleMusic-app'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
