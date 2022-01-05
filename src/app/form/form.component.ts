import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newquote=new Quote("","","",new Date())
  @Output() addquote = new EventEmitter<Quote>();

  postquote(){
    this.addquote.emit(this.newquote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
