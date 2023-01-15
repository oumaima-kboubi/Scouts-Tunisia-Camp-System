export class Article {
   id: number;
   title: string;
   content:string;
   author:string;
  updateDate: string;

  constructor(id = 0,title= '', content = '',author='',updateDate='') {
    this.id = id;
    this.title = title;
    this.content = content;
    this.author= author;
    this.updateDate=updateDate;
  }
}
