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

@NgModule({
  declarations: [
    AppComponent, TopBarComponent,
    SideBarComponent, FooterComponent, 
    Cards1Component, Carousel1Component, 
    LayoutComponent, ListenNowBodyComponent,
    AlbumBodyComponent, BrowseBodyComponent,
    RadioBodyComponent, PlaylistBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
