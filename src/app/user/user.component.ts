import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  users: User[] = [];
  detail: string;
  constructor(private userService: UserService, private data: DataService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  getUser(userId: number): void {
    this.userService.getUser(userId).subscribe(user => this.user = user);
  }

  getUpdate(user: User): void {
    this.data.changeMessage(user);
  }

  deleteUser(userId:number):void{
    this.userService.deleteUser(userId).subscribe();
  }


}
