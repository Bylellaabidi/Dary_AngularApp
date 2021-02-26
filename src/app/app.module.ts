import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OwlModule } from 'ngx-owl-carousel';
import { HerosComponent } from './heros/heros.component';
import { ClientSaysComponent } from './client-says/client-says.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { AgentComponent } from './agent/agent.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {Router, RouterModule, Routes} from "@angular/router";
import { PropertyGComponent } from './Property/property-g/property-g.component';
import { PropertyListAgentComponent } from './Property/property-list-agent/property-list-agent.component';
import { PropertyDetailsComponent } from './Property/property-details/property-details.component';
import { PropertyCompareComponent } from './Property/property-compare/property-compare.component';
import { PropertySubmitComponent } from './Property/property-submit/property-submit.component';
import { SignComponent } from './sign/sign.component';
import { FlashMessagesModule } from 'angular2-flash-messages';


const appRoutes :Routes = [
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'agent',
    component:AgentComponent
  },
 

  
  {
    path:'contact',
    component:ContactUsComponent
  },
  {
    path:'property',
    component:PropertyGComponent
  },
  {
    path:'profile',
    component:PropertyListAgentComponent
  },
  {
    path:'property-details',
    component:PropertyDetailsComponent
  },
  {
    path:'property-comparison',
    component:PropertyCompareComponent
  },
  {
    path:'property-submit',
    component:PropertySubmitComponent
  },
  {
    path:'sign',
    component:SignComponent
  },
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HerosComponent,
    ClientSaysComponent,
    SearchComponent,

    AboutComponent,
    AgentComponent,
    ContactUsComponent,
    PropertyGComponent,
    PropertyListAgentComponent,
    PropertyDetailsComponent,
    PropertyCompareComponent,
    PropertySubmitComponent,
    SignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true}),
    FlashMessagesModule.forRoot()
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
