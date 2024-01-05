import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { SublevelMenuComponent } from './layouts/sidenav/sublevel-menu.component';
import { BodyComponent } from './layouts/body/body.component';
import { ContentComponent } from './layouts/content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localEsPE from '@angular/common/locales/es-PE';

registerLocaleData(localEsPE)

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SublevelMenuComponent,
    BodyComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,
    CdkMenuModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-PE'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
