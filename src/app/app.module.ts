import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProdModule } from './container/prod/prod.module';
import { DevelopModule } from './container/develop/develop.module';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    environments()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * 環境毎に呼び出す Module を切り替える
 */
function environments() {
  return environment.production ? ProdModule : DevelopModule;
}