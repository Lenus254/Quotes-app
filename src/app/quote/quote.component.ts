import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quote[]=[new Quote("linus","owner","No education is better than half education",new Date())]

  constructor() { }

  ngOnInit(): void {
  }

}
