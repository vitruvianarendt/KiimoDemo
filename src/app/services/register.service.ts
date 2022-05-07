import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';


export interface User {
  id: Number;
  firstName: String;
  lastName: String;
  email: String;
}
export interface Response {
  posts: User;
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends Mutation {

  document = gql`
  mutation {
    addUser (
      input: {
        firstname: "Viktor", 
        lastName: "Ivanov", 
        email: "ivanov.viktor@gmail.com"
      }
    )
    {
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;
}