import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {

  listChangedEvent: EventEmitter<Post[]>=new EventEmitter();
  listOfPosts: Post[] = [
    // new Post(
    //   'Title1',
    //   'Description1',
    //   'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Salto_del_Angel-Canaima-Venezuela08.JPG/800px-Salto_del_Angel-Canaima-Venezuela08.JPG',
    //   'author1',
    //   new Date(),
    //   1
    // ),
    // new Post(
    //   'Title2',
    //   'Description2',
    //   'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/sajek-hills-in-khagrachari-bangladesh-nihab-rahman.jpg',
    //   'author2',
    //   new Date(),
    //   2
    // ),
    // new Post(
    //   'Title3',
    //   'Description3',
    //   'https://live.staticflickr.com/2738/4195504888_edb9cc9fb6_b.jpg',
    //   'author3',
    //   new Date(),
    //   3
    // ),
  ];

  // service 1
  getPosts() {
    return this.listOfPosts;
  }
  // service 2
  deletePost(index: number) {
    this.listOfPosts.splice(index, 1);
  }
  // service 3
  editPost(index : number){
      return this.listOfPosts[index];
  }
  // service 4
  addPost(post:Post){
      this.listOfPosts.push(post);
  }
  // service 5
  getPost(index:number){
    return this.listOfPosts[index];
  }
  //service 6

  setLikes(index:number){
    this.listOfPosts[index].numberOfLikes++;
  }
  //service 7
   setPosts(listOfPosts: Post[]){
     this.listOfPosts = listOfPosts;
     this.listChangedEvent.emit(listOfPosts);

   }
 

}
