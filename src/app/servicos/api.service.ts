import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Post, Usuario } from './../app.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private listUser = null;
  private listTweets = null;
  private API = 'https://lpweb-microblog.herokuapp.com/api/textos/';
  private arquivoUsuario = './assets/dados/usuarios.json';

  constructor(private http: HttpClient) {
   };

  carregarUsuarios(){
    return this.http.get( this.arquivoUsuario )
  };

  todosUsuarios(): Array<Usuario>{
    return this.listUser
  };

  carregarTweets(){
    return this.http.get( this.API );
  };

  todosTweets(): Array<Post>{
    return this.listTweets
  };

  getTweet(id: string){
    return this.http.get( this.API + id + "/" )
  }

  salvar(post: Post) {
    if (post.id) {
      return this.http.patch( this.API + post.id + '/', { descricao: post.descricao } );
    }
    else {
      return this.http.post( this.API, { descricao: post.descricao } );
    }
  }

  excluir(post: Post) {
    return this.http.delete( this.API + post.id );
  }

}