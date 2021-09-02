import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { CommonServiceService } from 'src/app/common/Service/common-service.service';

@Component({
  selector: 'app-view-rating',
  templateUrl: './view-rating.component.html',
  styleUrls: ['./view-rating.component.css']
})
export class ViewRatingComponent implements OnInit {
  constructor(private commonService: CommonServiceService) {
   
  }

  allData: any;

  ngOnInit(): void {
    this.allRestroData();
  }
  
  allRestroData(): void {
    this.commonService.getRestro().subscribe((data: any) => {
      this.allData = data;
      this.commonService.allRestroData = this.allData;
    });
  }

}
