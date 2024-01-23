import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        roles
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        roles
      }
    }
  }
`;

export const ADD_CLOTHING = gql`
  mutation addClothing(
    $name: String!
    $description: String!
    $category: String!
    $subtype: String!
    $price: Float!
    $sizes: [SizeInput]!
    $imageUrl: String
  ) {
    addClothing(
      name: $name
      description: $description
      category: $category
      subtype: $subtype
      price: $price
      sizes: $sizes
      imageUrl: $imageUrl
    ) {
      _id
      name
      description
      category
      subtype
      price
      sizes {
        size
        inStock
      }
      imageUrl
    }
  }
`;

export const UPDATE_CLOTHING = gql`
  mutation updateClothing(
    $clothingId: ID!
    $name: String
    $description: String
    $category: String
    $subtype: String
    $price: Float
    $sizes: [SizeInput]
    $imageUrl: String
  ) {
    updateClothing(
      clothingId: $clothingId
      name: $name
      description: $description
      category: $category
      subtype: $subtype
      price: $price
      sizes: $sizes
      imageUrl: $imageUrl
    ) {
      _id
      name
      description
      category
      subtype
      price
      sizes {
        size
        inStock
      }
      imageUrl
    }
  }
`;

export const DELETE_CLOTHING = gql`
  mutation deleteClothing($clothingId: ID!) {
    deleteClothing(clothingId: $clothingId) {
      _id
      name
      description
      category
      subtype
      price
      sizes {
        size
        inStock
      }
      imageUrl
    }
  }
`;
