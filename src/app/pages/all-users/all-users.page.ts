import { Component, OnInit } from '@angular/core';
import { GetAllUsersService } from '../../services/get-all-users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.page.html',
  styleUrls: ['./all-users.page.scss'],
})
export class AllUsersPage implements OnInit {

  constructor(private getAllUsers: GetAllUsersService) { }
  users: any;

  ngOnInit() {
    this.getAllUsers
    .watch()
    .valueChanges
    .subscribe(({ data }) => {
      this.users = data.user;
    });
  }

}
