import { Component, OnInit } from '@angular/core';
import { UserPersistanceService } from 'src/services/UserPersistanceService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent implements OnInit {

  constructor(
    private userPersistance: UserPersistanceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onRegistr(username: string, password: string) {
    if(username === "" || password ===""){
      alert("Incorrect password or username!")
    } else if (username === this.userPersistance.get('username') || password === this.userPersistance.get('password')) {
      alert("You are already registered!")
    } else {
    this.userPersistance.set('username', username);
    this.userPersistance.set('password', password);
    this.router.navigate(['/todo']);};
}
}