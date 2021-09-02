import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-rating',
  templateUrl: './edit-rating.component.html',
  styleUrls: ['./edit-rating.component.css']
})
export class EditRatingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Submit(): void {
    alert("Thank you for your response. It has been successfully submitted !!");
    this.router.navigate(["view-rating"]);
  }
}
