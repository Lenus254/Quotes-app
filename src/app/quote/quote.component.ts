import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
total:number=0
  quote:Quote[]=[new Quote("linus","owner","No education is better than half education",new Date())]
  addNewQuote(q:any){
    q.dateposted=new Date(q.dateposted)
    this.quote.push(q)

    
    
  }
  toggleDetails(index:number){
    this.quote[index].showQuoteDetails = !this.quote[index].showQuoteDetails;
  }
  upvotecount(i:number){
    this.quote[i].countupvotenumber= this.quote[i].countupvotenumber+1
    if(this.quote[i].countupvotenumber>this.total){
      this.total=this.quote[i].countupvotenumber
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
  quoteDelete(Delete:boolean,index:number){
    if (Delete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }
}
