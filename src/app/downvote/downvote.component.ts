import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downvote',
  templateUrl: './downvote.component.html',
  styleUrls: ['./downvote.component.css']
})
export class DownvoteComponent implements OnInit {
  countdownvote:number=0
  downvotecount(){
    this.countdownvote++
  }

  constructor() { }

  ngOnInit(): void {
  }

}
