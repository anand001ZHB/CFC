import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  constructor(config: NgbRatingConfig, private router: Router) {
    config.max = 5;
  }

  currentRate: any;
  @Input() rData: any[]=[];
  allData: any;
  searchText: any;
  
  ngOnInit(): void {
   
  }

  ngOnChanges(): void{
    console.log(this.rData);
    if(this.rData !== undefined){
      this.allData = this.rData;
    }
  }

  editRating(): void {
    this.router.navigate(["login"]);
  }

  displayValue(event: any) {
    this.searchText = event;
  }
}
