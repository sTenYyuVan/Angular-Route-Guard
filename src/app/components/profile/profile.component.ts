import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router) { }

  profile = new Profile('YUVAN STENY A', '@admin', "Sample angular application for simulation of preventing unauthorized user in particular page by utilizing angular guards.")
  edited = false;

  logOutUser() {

    sessionStorage.removeItem('loginId');
    this.router.navigateByUrl('/login');
    alert("Logged Out.");
  }

  onSubmit() {
    this.edited = true;
    alert("Profile Updated");
  }

  ngOnInit(): void {
  }

}
