import { gql } from "@apollo/client";

export const GET_COMPOUNDS = gql`
  query GET_COMPOUNDS {
    compounds {
      name
      media
      description
    }
  }
`;
