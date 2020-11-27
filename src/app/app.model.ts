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
    descricao: string;
    curtida: boolean;

    constructor(id: number, descricao: string, curtida: boolean) {
        this.id = id;
        this.descricao = descricao;
        this.curtida = curtida;
        let min = 1; 
        let max = 10;  
        let random = Math.floor(Math.random() * (+max - +min)) + +min; 
    }
    
}