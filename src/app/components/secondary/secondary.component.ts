import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.scss']
})
export class SecondaryComponent implements OnInit {
  public cardDetails = []
  

  constructor() { }

  ngOnInit() {
    this.cardDetails =[{
      imageLocation:'../assets//images/RTM.jpg',
      title :'Route To Market',
      shortDescription: "Strategy roadmap of taking product from manufacturers to Retailers , Distributers...",
      demoLink: 'https://dev.azure.com/Amitabh1Kumar/_git/RouteToMarket',
      codeShareLink: 'https://app.powerbi.com/groups/me/reports/920ae4b7-ddcd-4fa4-acd7-d0d65a2d054d/ReportSection097610039054b044d36d?ctid=5b973f99-77df-4beb-b27d-aa0c70b8482c'
    },
    {
      imageLocation:'../assets/images/sociallistening.jpeg',
      title :'Employee Attrition Pediction ',
      shortDescription: "Pedictive Analysis for Employee Attrition, along with feature analsys",
      demoLink: ' https://app.powerbi.com/groups/me/apps/04835421-a822-4666-80d9-3c6464374a6e/reports/804cf79b-f0d6-4452-a30d-6c649b8a67b8/ReportSectionba0a6251d5cb52ac6346?ctid=5b973f99-77df-4beb-b27d-aa0c70b8482c',
      codeShareLink: ''
    }]
  }

}
