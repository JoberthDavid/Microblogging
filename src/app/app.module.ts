import { ApiService } from './servicos/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarraNavegacaoComponent } from './componentes/barra-navegacao/barra-navegacao.component';
import { CabecalhoFeedsComponent } from './componentes/cabecalho-feeds/cabecalho-feeds.component';
import { PostFeedsComponent } from './componentes/post-feeds/post-feeds.component';
import { MenuSugestoesComponent } from './componentes/menu-sugestoes/menu-sugestoes.component';

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
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
