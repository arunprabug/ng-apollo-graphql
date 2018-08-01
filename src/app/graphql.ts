import gql from 'graphql-tag';

export const GET_FRIENDS = gql`
{
  user(id: "1") {
    firstName
    age
    id
  }
}
`;


export const ENDPOINT = 'http://localhost:4000/graphql';
