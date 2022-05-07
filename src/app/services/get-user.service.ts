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
export class GetUserService extends Query<Response> {
  document = gql`
  query {
    user(where: {id: {eq: 2}})
    {
      id
      firstName
      lastName
      email
    }
  }
`;
}
