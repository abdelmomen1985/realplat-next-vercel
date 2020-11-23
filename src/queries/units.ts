import { gql } from "@apollo/client";

export const GET_UNITS = gql`
  query units {
    units(limit: 15) {
      id
      slug_ar
      slug_en
      bathrooms
      bedrooms
      bua
      media
      compound {
        name
        description
      }
    }
    units_aggregate {
      aggregate {
        count
      }
    }
  }
`;
