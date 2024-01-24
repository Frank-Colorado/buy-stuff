import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      roles
    }
  }
`;

export const QUERY_ALL_CLOTHING = gql`
  query allClothing {
    allClothing {
      _id
      name
      description
      category
      subtype
      price
      sizes
      imageUrl
    }
  }
`;

export const QUERY_CLOTHING_BY_ID = gql`
  query clothingById($clothingId: ID!) {
    clothingById(clothingId: $clothingId) {
      _id
      name
      description
      category
      subtype
      price
      sizes
      imageUrl
    }
  }
`;

export const QUERY_CLOTHING_BY_CATEGORY = gql`
  query clothingByCategory($category: String!) {
    clothingByCategory(category: $category) {
      _id
      name
      description
      category
      subtype
      price
      sizes
      imageUrl
    }
  }
`;
