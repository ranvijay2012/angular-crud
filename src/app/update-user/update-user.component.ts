import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: User;
  constructor(private userService: UserService, private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(user => this.user = user);
  }

  onSubmit(user):void{
    this.userService.updateUser(user).subscribe();
  }
}
