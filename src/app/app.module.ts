import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao/barra-navegacao.component';
import { CabecalhoFeedsComponent } from './cabecalho-feeds/cabecalho-feeds/cabecalho-feeds.component';
import { PostFeedsComponent } from './post-feeds/post-feeds/post-feeds.component';
import { MenuSugestoesComponent } from './menu-sugestoes/menu-sugestoes/menu-sugestoes.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent,
    CabecalhoFeedsComponent,
    PostFeedsComponent,
    MenuSugestoesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
