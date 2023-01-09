import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userAdmin: any;
  constructor(private router: Router) {
    this.userAdmin = {
      userName: '',
      userPass: '',
    };
  }

  loginUser() {
    if (this.userAdmin.userName == '@yuvanadmin' && this.userAdmin.userPass == 'Yuvansteny') {
      sessionStorage.setItem('loginId',this.userAdmin.userName);
      this.router.navigateByUrl('profile');
    } else {
      alert("Invalid Login Credentials !");
      console.log(this.userAdmin.userName);
      console.log(this.userAdmin.userPass);
    }
  }



  ngOnInit(): void {
  }

}
