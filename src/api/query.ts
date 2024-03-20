import { gql } from "@apollo/client";

export const LOGIN_AUTH = gql`
query LoginAuth($email: String!, $password: String!) {
    loginAuth(email: $email, password: $password) {
         status
         message
         token
         role {
          _id
          access {
            add
            delete
            edit
            view
          }
          permission
          role
        }
    }
  }
`