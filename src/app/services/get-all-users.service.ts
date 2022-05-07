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
export class GetAllUsersService extends Query<Response>{

  document = gql`
  query{
    user{
      id
      firstName
      lastName
      email
    }
  }
`;
}

