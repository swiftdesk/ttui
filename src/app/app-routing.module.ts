import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
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


const appRoutes:Routes=[
{path:'',component:AppComponent},
{path:'hire',component:HireComponent, children:[
    {path:'verified',component:VerifiedComponent},
    {path:'developers',component:DevelopersComponent},
    {path:'designer',component:DesignersComponent},
    {path:'seoExpers',component:SeoExpertsComponent}
]}

];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{
    
}