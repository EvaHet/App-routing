import { Component, OnInit } from '@angular/core';
import { UserPersistanceService } from 'src/services/UserPersistanceService';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string;
  password: string;

  constructor(private userPersistance: UserPersistanceService) { }

  ngOnInit(): void {
    this.username = this.userPersistance.get('username');
    this.password = this.userPersistance.get('password');
  }

  onSave() {
    this.userPersistance.set('username', this.username);
    this.userPersistance.set('password', this.password);
  }
}
