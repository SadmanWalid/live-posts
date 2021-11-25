import { Component, OnInit } from '@angular/core';
import { PostService } from '../post-service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  listOfPosts: Post[] = [];
  constructor(private postServices: PostService) {}

  ngOnInit(): void {
    this.listOfPosts = this.postServices.getPosts();
    this.postServices.listChangedEvent.subscribe((listOfPosts: Post[]) => {
      this.listOfPosts = listOfPosts;
    });
  }
}
