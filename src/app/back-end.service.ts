import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tap } from 'rxjs/operators';
import { PostService } from './post-service';
import { Post } from './post.model';

/**
 * database path
 *  https://live-posts-87db7-default-rtdb.firebaseio.com/
 */
@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postServices: PostService, private http: HttpClient) {}
  //func 1
  saveData() {
    //get list of posts from post services
    const listOfPosts: Post[] = this.postServices.getPosts();
    //save list of posts to backend
    this.http
      .put(
        'https://live-posts-87db7-default-rtdb.firebaseio.com/posts.json',
        listOfPosts
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  //func 2

  fetchData() {
    // get posts from backend

    this.http
      .get<Post[]>(
        'https://live-posts-87db7-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        tap((listOfPosts: Post[]) => {
          console.log(listOfPosts);
          // set list of post to post services
          this.postServices.setPosts(listOfPosts);
        })
      )
      .subscribe();
  }
}
