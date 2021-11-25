import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post-service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post?: Post;
  @Input() index: number = 0;
  constructor(private postService: PostService, private route:Router) {}

  ngOnInit(): void {
    //console.log(this.post);
  }

  onDelete() {
    this.postService.deletePost(this.index);
    //console.log("chk");
  }

  onEdit() {
    this.route.navigate(["post-edit",this.index]);
    
  }
  onLikePost(){
    this.postService.setLikes(this.index);
    console.log("Index: "+this.index)
  }
}
