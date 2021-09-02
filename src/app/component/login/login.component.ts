import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  user: string = '';
  password: string = '';

  ngOnInit() {
  }

  login(): void {
    if (this.user == 'admin' && this.password == 'admin') {
      this.router.navigate(["edit-rating"]);
    } else {
      alert("Invalid credentials");
    }
  }
  Register(): void {
    this.router.navigate(["register"]);
  }
}
