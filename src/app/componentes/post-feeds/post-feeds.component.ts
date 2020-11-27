import { ApiService } from './../../servicos/api.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Usuario, Post } from './../../app.model';

@Component({
  selector: 'app-post-feeds',
  templateUrl: './post-feeds.component.html',
  styleUrls: ['./post-feeds.component.css']
})
export class PostFeedsComponent implements OnInit {

  @Output()
  onEdit = new EventEmitter<any>();

  @Output()
  onDelete = new EventEmitter<any>();

  listUser: any = [];

  listTweets: any = [];

  editando : Post = { id: 0, postUserId: 0, descricao: '', curtida: false };
  descricao = null;
  postUserId = null;
  id = null;
  curtida = false;

  constructor(private apiService: ApiService) {
    this.getUserList();
    this.getPostList();
  }

  getUserList(){
    this.apiService.carregarUsuarios().subscribe(
      listUser => this.listUser = listUser,
      () => console.error('Deu erro ao carregar o JSON')
    );
  }

  getPostList(){
    this.apiService.carregarTweets().subscribe(
      listTweets => this.listTweets = listTweets,
      () => console.error('Deu erro na requisição') 
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

  salvar() {
    this.editando.descricao = this.descricao;
    this.editando.postUserId = this.postUserId;
    this.editando.curtida = this.curtida;
    this.editando.id = this.id;

    this.apiService.salvar( this.editando ).subscribe(
      (dados) => { this.getPostList();},
      error => console.log(error)
    );

    this.descricao = null;
    this.editando = { id: 0, postUserId: 0, descricao: '', curtida: false};
  }

  editar(post: Post) {
    this.editando = post;
    this.descricao = post.descricao;
    this.postUserId = post.postUserId;
    this.id = post.id;
    this.curtida = post.curtida;
  }

  excluir(post: Post) {
    if (this.editando == post) {
      alert('Não é possivel excluir publicação em edição');
    } else {
      if (confirm('Tem certeza que deseja excluir a publicação?')) {
        this.apiService.excluir(post).subscribe(
          dados => this.getPostList(),
          erro => console.log(erro));
      }
    }
  }

  ngOnInit(): void {
  }

}