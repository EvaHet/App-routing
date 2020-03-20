import { Component, OnInit } from '@angular/core';
import { UserPersistanceService } from 'src/services/UserPersistanceService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userPersistance: UserPersistanceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(username: string, password: string) {
    if(username === "" || password ===""){
      alert("Empty password or username!")
    } else {
    this.userPersistance.set('username', username);
    this.userPersistance.set('password', password);
    this.router.navigate(['/todo']);};
  }

}
