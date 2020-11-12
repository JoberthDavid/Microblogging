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

    id: number;
    postUserId: number;
    url: string;
    descricao: string;
    postDate: number;
    curtida: boolean;

    constructor(id: number, url: string, descricao: string, curtida: boolean) {
        this.id = id;
        this.url = url;
        this.descricao = descricao;
        this.curtida = curtida;
    }
    
}