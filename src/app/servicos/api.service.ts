import { Injectable } from '@angular/core';

import { Usuario, Post } from './../app.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {

   }

  getListUsers(){
    return [
      new Usuario(1,'Dani Calabresa','@calabresa'),
      new Usuario(2,'Sula Miranda','@sulamiranda'),
      new Usuario(3,'Beto Barbosa','@barbosa'),
      new Usuario(4,'Amado Batista','@batista'),
      new Usuario(5,'Léo Magalhães','@magalhaes'),
      new Usuario(6,'Roberta Miranda','@miranda'),
      new Usuario(7,'José Augusto','@augusto'),
      new Usuario(8,'Eduardo Costa','@costa'),
      new Usuario(9,'Maria da Silva','@mariasilva')
    ];
  }

  getListTweets(){
    return [
      new Post(101,1,'Lorem ipsum.',false),
      new Post(102,2,'Dolor sit amet.',false),
      new Post(103,3,'Consectetur adipisicing elit.',false),
      new Post(104,4,'Voluptates et voluptatibus vel tenetur quos.',false),
      new Post(105,5,'Id omnis sed error fuga necessitatibus.',false)
    ];

  }

}
