import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Post, Usuario } from './../app.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private listUser = null;

  constructor(private http: HttpClient) {
   }

  carregarDados(callback){
    this.http.get('./assets/dados/usuarios.json').subscribe(listUser => this.listUser = listUser).add(callback);
  }

  todos(): Array<Usuario>{
    return this.listUser
  }

  getListTweets(){
    return [
      new Post(101,1,'Lorem ipsum.',true),
      new Post(102,2,'Dolor sit amet.',false),
      new Post(103,3,'Consectetur adipisicing elit.',false),
      new Post(104,4,'Voluptates et voluptatibus vel tenetur quos.',false),
      new Post(105,5,'Id omnis sed error fuga necessitatibus.',false)
    ];

  }

}
