import { gql } from "@apollo/client";

export const GET_DEVELOPERS = gql`
  query GET_DEVELOPERS {
    developers {
      name
      media
    }
  }
`;
