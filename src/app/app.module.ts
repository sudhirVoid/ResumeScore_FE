import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { JobPageComponent } from './job-page/job-page.component';
import { JobmodalComponent } from './jobmodal/jobmodal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

import {MatDialogModule} from '@angular/material/dialog'; 
import { HttpClientModule } from '@angular/common/http';
import { JobcardComponent } from './jobcard/jobcard.component';
import {MatIconModule} from '@angular/material/icon';
import { TruncatePipe } from './pipes/truncate.pipe';
import { PriceCommaSeperatedPipe } from './pipes/price-comma-seperated.pipe';
import { JobAllDetailsComponent } from './job-all-details/job-all-details.component';
@NgModule({
  declarations: [
    AppComponent,
    JobPageComponent,
    JobmodalComponent,
    NavbarComponent,
    JobcardComponent,
    TruncatePipe,
    PriceCommaSeperatedPipe,
    JobAllDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
