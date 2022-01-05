import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-delete2',
  templateUrl: './delete2.component.html',
  styleUrls: ['./delete2.component.css']
})
export class Delete2Component implements OnInit {

  @Output() Delete= new EventEmitter

  deleteQuote(confirmed:boolean){
   this.Delete.emit(confirmed)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
