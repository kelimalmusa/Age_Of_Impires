import { Component, Input, OnInit } from '@angular/core';
import { ICost } from '../unit-details/unit-details.component';

@Component({
  selector: 'app-cost-parser',
  templateUrl: './cost-parser.component.html',
  styleUrls: ['./cost-parser.component.scss']
})
export class CostParserComponent implements OnInit {
  @Input() cost!: ICost
  costString = "";

  ngOnInit(): void {
    if (this.cost?.Wood) this.costString += "Wood: " + this.cost?.Wood + ", "
    if (this.cost?.Food) this.costString += "Food: " + this.cost?.Food + ", "
    if (this.cost?.Gold) this.costString += "Gold: " + this.cost?.Gold + ", "
    this.costString = this.costString.slice(0, this.costString.lastIndexOf(","))
  }

}
