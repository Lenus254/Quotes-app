export class Quote {
 public showQuoteDetails:boolean;
 public countupvotenumber:number;
    constructor(public name:string,public author:string,public quote:string,public dateposted:Date){

        this.showQuoteDetails=false;
        this.countupvotenumber=0
    }
}
