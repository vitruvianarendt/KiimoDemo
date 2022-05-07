import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-facebook-register',
  templateUrl: './facebook-register.page.html',
  styleUrls: ['./facebook-register.page.scss'],
})
export class FacebookRegisterPage {

  constructor(private registerUser: RegisterService, private router: Router) { }

  register() {
    this.registerUser
      .mutate()
      .subscribe(({ data }) => {
        console.log('Data:', data);
        this.router.navigate(["../successful-registration"]);
      }, (error) => {
        console.log('There was an error sending the query', error);
      });
  }
}
