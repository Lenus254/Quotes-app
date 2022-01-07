import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { QuoteComponent } from './quote/quote.component';
import { UpvoteComponent } from './upvote/upvote.component';
import { DownvoteComponent } from './downvote/downvote.component';
import { Delete2Component } from './delete2/delete2.component';
import { DateCountPipe } from './date-count.pipe';
import { QuoteDatailsComponent } from './quote-datails/quote-datails.component';
import { QuoteHighlightDirective } from './quote-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QuoteComponent,
    UpvoteComponent,
    DownvoteComponent,
    Delete2Component,
    DateCountPipe,
    QuoteDatailsComponent,
    QuoteHighlightDirective,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
