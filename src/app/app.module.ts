import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyLayoutComponent } from './body-layout/body-layout.component';
import { Cards1Component } from './cards1/cards1.component';
import { Carousel1Component } from './carousel1/carousel1.component';
import { FooterComponent } from './footer/footer.component';
import { TopBarComponent } from './header/top-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent, TopBarComponent,
    SideBarComponent, FooterComponent, 
    Cards1Component, Carousel1Component, 
    LayoutComponent, BodyLayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
