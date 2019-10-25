import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NotifyComponent } from './notify/notify.component';
import { NewsComponent } from './news/news.component';
import { GoogleComponent } from './google/google.component';
import { LifeCilesComponent } from './life-ciles/life-ciles.component';
import {CheckboxModule} from 'primeng/checkbox';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    NotifyComponent,
    NewsComponent,
    GoogleComponent,
    LifeCilesComponent
  ],
  imports: [
    BrowserModule,
    CheckboxModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
