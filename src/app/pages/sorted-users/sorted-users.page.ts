import { Component, OnInit } from '@angular/core';
import { SortUsersService } from "../../services/sort-users.service"
@Component({
  selector: 'app-sorted-users',
  templateUrl: './sorted-users.page.html',
  styleUrls: ['./sorted-users.page.scss'],
})
export class SortedUsersPage implements OnInit {

  constructor(private getAllSortedUsers: SortUsersService) { }
  users: any;

  ngOnInit() {
    this.getAllSortedUsers
      .watch()
      .valueChanges
      .subscribe(({ data }) => {
        this.users = data.user;
      });
  }
}
