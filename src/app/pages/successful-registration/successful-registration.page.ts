import { Component, OnInit } from '@angular/core';


import { GetUserService } from '../../services/get-user.service';

@Component({
  selector: 'app-successful-registration',
  templateUrl: './successful-registration.page.html',
  styleUrls: ['./successful-registration.page.scss'],
})
export class SuccessfulRegistrationPage implements OnInit {

  users: any;

  constructor(private getUserById: GetUserService) { }

  ngOnInit(): void {
    this.getUserById.watch()
      .valueChanges
      .subscribe(({ data }) => {
        this.users = data.user;
      });
  }
}
