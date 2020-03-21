import { Component, OnInit } from '@angular/core';
import { UserPersistanceService } from 'src/services/UserPersistanceService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private userPersistance: UserPersistanceService,
    private router: Router) { }

  ngOnInit(): void {
    this.userPersistance.get('username');
    this.userPersistance.get('password');
  }

  onLogin(username: string, password: string) {
    if(username === "" || password ===""){
      alert("Empty password or username!")
    } else if (username !== this.userPersistance.get('username') || password !== this.userPersistance.get('password')) {
      alert("Incorrect password or username!")
    } else {
      this.router.navigate(['/todo']);};
    }
  }


