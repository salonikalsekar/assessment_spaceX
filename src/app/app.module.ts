import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {HttpClientModule} from '@angular/common/http';
import { MatProgressSpinnerModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatSnackBarModule, MatToolbarModule, MatTableModule } from '@angular/material';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchesListComponent } from './launches-list/launches-list.component';
import { HeaderComponent } from './header/header.component';
import { LaunchesService } from './services/launches.service';


@NgModule({
  declarations: [
    AppComponent,
    LaunchesListComponent,
    HeaderComponent
  ],
  imports: [
    MatSortModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSnackBarModule

  ],
  providers: [LaunchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
