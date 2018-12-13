import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GoogleautocompleteComponent } from './googleautocomplete/googleautocomplete.component';
import { BingautosuggestComponent } from './bingautosuggest/bingautosuggest.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { 
    path: '',
    redirectTo: 'haufesearch',
    pathMatch: 'full'
  },
  { 
    path: 'haufesearch',
    component: GoogleautocompleteComponent 
  },
  { 
    path: 'bingsearch',
    component: BingautosuggestComponent 
  },
  { 
    path: '**', 
    component: PagenotfoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GoogleautocompleteComponent,
    BingautosuggestComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
