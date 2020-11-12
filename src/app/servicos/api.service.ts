import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Post, Usuario } from './../app.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private listUser = null;
  private listTweets = null;

  constructor(private http: HttpClient) {
   };

  carregarUsuarios(callback){
    this.http.get('./assets/dados/usuarios.json').subscribe(listUser => this.listUser = listUser).add(callback);
  };

  todosUsuarios(): Array<Usuario>{
    return this.listUser
  };

  carregarTweets(callback){
    this.http.get('./assets/dados/tweets.json').subscribe(listTweets => this.listTweets = listTweets).add(callback);
    //console.log(this.http.get('https://lpweb-microblog.herokuapp.com/api/textos/').subscribe(listTweets => this.listTweets = listTweets).add(callback));
  };

  todosTweets(): Array<Post>{
    return this.listTweets
  };

}
