import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {

  countupvote:number=0

  upvotecount(){
    this.countupvote++

  }

  constructor() { }

  ngOnInit(): void {
  }

}
