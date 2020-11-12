import { ApiService } from './../../servicos/api.service';
import { Component, OnInit } from '@angular/core';

import { Usuario, Post } from './../../app.model';

@Component({
  selector: 'app-post-feeds',
  templateUrl: './post-feeds.component.html',
  styleUrls: ['./post-feeds.component.css']
})
export class PostFeedsComponent implements OnInit {

  listUser: Usuario[];

  listTweets: Post[];

  constructor(private apiService: ApiService) {
    this.apiService.carregarUsuarios(
      () => this.listUser = this.apiService.todosUsuarios() 
    );
    this.apiService.carregarTweets(
      () => this.listTweets = this.apiService.todosTweets()
    );
  }

  getUserObject(userId: number){
    for(let i=0; i < this.listUser.length; i++){
      if (this.listUser[i].userId == userId){
        return this.listUser[i]
      }
    };
  }

  getUser(userId: number){
    return this.getUserObject(userId).user
  }

  getUsername(userId: number){
    return this.getUserObject(userId).username
  }

  getUserImage(userId: number){
    return this.getUserObject(userId).userImage
  }

  getTweetObject(id: number){
    for(let i=0; i < this.listTweets.length; i++){
      if (this.listTweets[i].id == id){
        return this.listTweets[i]
      }
    };
  }

  getPostUser(id: number){
    return this.getTweetObject(id).postUserId
  }

  getDescricao(id: number){
    return this.getTweetObject(id).descricao
  }

  getCurtida(id: number){
    return this.getTweetObject(id).curtida
  }

  ngOnInit(): void {
  }

}