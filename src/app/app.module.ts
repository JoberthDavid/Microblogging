import { ApiService } from './servicos/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacaoComponent } from './componentes/barra-navegacao/barra-navegacao.component';
import { PostFeedsComponent } from './componentes/post-feeds/post-feeds.component';
import { MenuSugestoesComponent } from './componentes/menu-sugestoes/menu-sugestoes.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PostDetailComponent } from './componentes/post-detail/post-detail.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent,
    PostFeedsComponent,
    MenuSugestoesComponent,
    PostDetailComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
