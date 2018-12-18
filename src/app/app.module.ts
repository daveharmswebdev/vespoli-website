import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CustomMaterialModule } from './core/material.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './home/login/login.component';
import { LoginService } from './home/login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginEffects } from './home/login/store/login.effects';
import { NavbarComponent } from './navbar/navbar.component';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    DialogComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([LoginEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    FormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule
  ],
  entryComponents: [
    DialogComponentComponent
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
