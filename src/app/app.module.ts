import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao/barra-navegacao.component';
import { CabecalhoFeedsComponent } from './cabecalho-feeds/cabecalho-feeds/cabecalho-feeds.component';
import { PostFeedsComponent } from './post-feeds/post-feeds/post-feeds.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent,
    CabecalhoFeedsComponent,
    PostFeedsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
