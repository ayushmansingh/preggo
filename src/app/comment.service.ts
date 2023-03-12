import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  id: any;
  constructor() { }

  setId(id:any){
    this.id = id;
  }

  getId(){
    return this.id;
  }
}
