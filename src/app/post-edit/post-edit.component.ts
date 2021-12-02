import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostService } from '../post-service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;
  editMode = false;
  index = 0;

  constructor(
    private postService: PostService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let title = '';
    let description = '';
    let imagePath = '';
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['index']) {
        this.index = params['index'];
        const post = this.postService.getPost(params['index']);
        title = post.title;
        description = post.description;
        imagePath = post.imgPath;
        this.editMode = true;
      }
    });

    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
      imagePath: new FormControl(imagePath, [Validators.required]),
    });
  }

  onSubmit() {
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;
    //creating post object
    const post: Post = new Post(
      title,
      description,
      imagePath,
      'author@author.com',
      new Date(),
      0,
      0
    );
    //add post
    if (!this.editMode) {
      //calling service
      this.postService.addPost(post);
    }
    //edit post
    else {
      this.postService.deletePost(this.index);
      this.postService.addPost(post);
    }

    // route to /post-live
    this.route.navigate(['./post-list']);
  }
}
