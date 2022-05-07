import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';

export interface User {
  id: Number;
  firstName: String;
  lastName: String;
  email: String;
}
export interface Response {
  user: User[];
}

@Injectable({
  providedIn: 'root'
})

export class SortUsersService extends Query<Response>{

  document = gql`
  query {
    user(order: {firstName: DESC})
    {
      id
      firstName
      lastName
      email
    }
  }
  `;
}