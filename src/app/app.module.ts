import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CampusesComponent } from './components/users/campuses/campuses.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { AdminComponent } from './components/users/admin/admin.component';
import { AssistantComponent } from './components/users/assistant/assistant.component';

@NgModule({
  declarations: [
    AppComponent,
    CampusesComponent,
    AdminComponent,
    AssistantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
