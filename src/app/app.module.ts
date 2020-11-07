import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao/barra-navegacao.component';
import { CabecalhoFeedsComponent } from './cabecalho-feeds/cabecalho-feeds/cabecalho-feeds.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent,
    CabecalhoFeedsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
