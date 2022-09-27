import { gql } from "@apollo/client";

export const LOAD_POSTS = gql`
  query {
    characters {
      results {
        id
        name
        status
        species
      }
    }
  }
`;
