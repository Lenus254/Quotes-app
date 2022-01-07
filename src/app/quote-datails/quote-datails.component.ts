import { Component, OnInit,Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-datails',
  templateUrl: './quote-datails.component.html',
  styleUrls: ['./quote-datails.component.css']
})
export class QuoteDatailsComponent implements OnInit {

  @Input() quote!: Quote;

  constructor() { }

  ngOnInit(): void {
  }

}
