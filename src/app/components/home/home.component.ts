import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public totalrows = [];
  
  
  
  constructor() { }

  ngOnInit() {
    this.totalrows=[{
      imageLocation:'../assets/images/sociallistening.jpeg',
      title :'Consumer Sense ',
      shortDescription: "Understanding sentiment towards brand, products is pivotal for all industries..",
      demoLink: 'https://consumersense.eu-gb.mybluemix.net/trackit/asian+paint',
      codeShareLink: 'https://dev.azure.com/Amitabh1Kumar/SocialListening/_git/SocialListening'
    },{
      imageLocation:'../assets//images/PriceBenchmark1.jpg',
      title :'Price Benchmarking',
      shortDescription: "Dashboard being prepared & published regularly for management reporting.",
      demoLink: 'https://ey-sales-market.github.io/Benchmarking/',
      codeShareLink: 'https://dev.azure.com/Amitabh1Kumar/EY%20Sales%20Price%20Benchmarking/_git/EY%20Sales%20Price%20Benchmarking'
    },{
      imageLocation:'../assets//images/SpendOp1.jpg',
      title :'Flight Ticket Booking',
      shortDescription: "Natural Language Generation for Flight Ticket Booking...",
      demoLink: ' https://app.powerbi.com/groups/me/apps/04835421-a822-4666-80d9-3c6464374a6e/reports/43899e16-71ca-4523-bcf6-4d961f58ca80/ReportSection?ctid=5b973f99-77df-4beb-b27d-aa0c70b8482c',
      codeShareLink: ''
    },{
      imageLocation:'../assets//images/PriceBenchmark2.jpg',
      title :'Retails Market Insight',
      shortDescription: "Natural Language Generation for Retail Market Sales Data",
      demoLink: 'https://app.powerbi.com/groups/me/apps/04835421-a822-4666-80d9-3c6464374a6e/reports/43899e16-71ca-4523-bcf6-4d961f58ca80/ReportSection?ctid=5b973f99-77df-4beb-b27d-aa0c70b8482c',
      codeShareLink: ''
    }];
    console.log(this.totalrows)
  }

}
