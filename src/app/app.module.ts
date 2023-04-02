import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsDisplayComponent } from './cats-display/cats-display.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CatItemComponent } from './cat-item/cat-item.component';
import { HeartComponent } from './heart/heart.component';
import { ReloadComponent } from './reload/reload.component';
import { ReloadIconComponent } from './reload-icon/reload-icon.component';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CatsDisplayComponent,
    CatItemComponent,
    HeartComponent,
    ReloadComponent,
    ReloadIconComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
