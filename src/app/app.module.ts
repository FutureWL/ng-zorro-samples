import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';
import {DrawerComponent} from './drawer/drawer.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawerComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdMobileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
