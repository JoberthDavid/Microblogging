import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servicos/api.service';

import { Usuario, Post } from './../../app.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  tweetId: string;
  nome: string;
  usuario: string;
  tweet = null;
  item: any;

  constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.tweetId = id;
    this.getTweetObject( this.tweetId );
    const username = this.route.snapshot.paramMap.get('nome');
    this.nome = username;
    const user = this.route.snapshot.paramMap.get('usuario');
    this.usuario = user;
  }

  getTweetObject(tweetId: string){
    this.apiService.getTweet( tweetId ).subscribe(
      post => this.tweet = post,
      () => console.error('Deu erro na requisição') 
    );
  }

  getUsername(){
    return "Nome: " + this.nome
  }

  getUser(){
    return "Usuário: " + this.usuario
  }

  getId(){
    return "Id: " + this.tweet.id
  }

  getUrl(){
    return "url: " + this.tweet.url
  }

  getDescricao(){
    return "Descrição: " + this.tweet.descricao
  }

  getCurtida(){
    return "Curtida: " + this.tweet.curtida
  }

}
