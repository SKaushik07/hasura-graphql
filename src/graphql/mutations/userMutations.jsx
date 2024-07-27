import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation CreateUser($id: Int, $name: String!, $email: String!) {
  insert_users_one(object: {id: $id, name: $name, email: $email }) {
    id
    name
    email
  }
}
`;
