import {TooltipModule} from 'primeng';
import {FormsModule} from '@angular/forms/forms';
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
import { UserpageComponent } from './userpage/userpage.component';
import { HttpClientModule } from '@angular/common/http';
import { TypcecheckComponent } from './typcecheck/typcecheck.component';
import { TestformComponent } from './testform/testform.component';
import { RxjsLearnComponent } from './rxjs-learn/rxjs-learn.component';

import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    NotifyComponent,
    NewsComponent,
    GoogleComponent,
    LifeCilesComponent,
    UserpageComponent,
    TypcecheckComponent,
    TestformComponent,
    RxjsLearnComponent,
  ],
  imports: [
    BrowserModule,
    CheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    CalendarModule,
    BrowserAnimationsModule,
    TooltipModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
