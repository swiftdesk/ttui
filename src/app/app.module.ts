import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HireComponent } from './hire/hire.component';
import { VerifiedComponent } from './hire/verified/verified.component';
import { DesignersComponent } from './hire/designers/designers.component';
import { DevelopersComponent } from './hire/developers/developers.component';
import { SeoExpertsComponent } from './hire/seo-experts/seo-experts.component';
import { StartComponent } from './start/start.component';
import { LoginComponent } from './login/login.component';
import { EstimatorComponent } from './estimator/estimator.component';
import { PlatformComponent } from './platform/platform.component';
import { ManagementComponent } from './platform/management/management.component';
import { TopTalentComponent } from './platform/top-talent/top-talent.component';

import {AppRoutingModule} from './app-routing.module';
import { AssuritygitComponent } from './platform/assuritygit/assuritygit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HireComponent,
    VerifiedComponent,

    DesignersComponent,
    DevelopersComponent,
    SeoExpertsComponent,
    StartComponent,
    LoginComponent,
    EstimatorComponent,
    PlatformComponent,
    ManagementComponent,
    TopTalentComponent,
    AssuritygitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
