export class User {
  id: number;
  username: string;
  password:string;
  email:string;

  constructor(id = 0, username= '', password = '', email = '') {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
  }
}
