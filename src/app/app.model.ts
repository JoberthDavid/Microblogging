export class Usuario{

    userId: number;
    username: string;
    user: string;
    userImage: string;

    constructor(userId: number, username: string, user: string) {
        this.userId = userId;
        this.username = username;
        this.user = user;
        this.userImage = 'http://lorempixel.com/400/200/people/' + userId + '/';
    }

}

export class Post{

    postId: number;
    postUserId: number;
    descricao: string;
    postDate: number;
    curtida: boolean;

    constructor(postId: number, postUserId: number, descricao: string, curtida: boolean) {
        this.postId = postId;
        this.postUserId = postUserId;
        this.descricao = descricao;
        this.postDate = Date.UTC(2020, 11, postId);
        this.curtida = curtida;
    }
    
}