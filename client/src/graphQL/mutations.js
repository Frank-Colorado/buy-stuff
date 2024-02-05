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

export const CREATE_PRODUCT = gql`
  mutation addClothing(
    $name: String!
    $description: String!
    $category: String!
    $subtype: String!
    $price: Float!
    $sizes: [String]!
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
      sizes
      imageUrl
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateClothing(
    $clothingId: ID!
    $name: String
    $description: String
    $category: String
    $subtype: String
    $price: Float
    $sizes: [String]
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
      sizes
      imageUrl
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteClothing($clothingId: ID!) {
    deleteClothing(clothingId: $clothingId) {
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

export const ADD_ORDER = gql`
  mutation addOrder(
    $products: [ProductInput]!
    $subtotal: Float!
    $paymentStatus: Boolean!
  ) {
    addOrder(
      products: $products
      subtotal: $subtotal
      paymentStatus: $paymentStatus
    ) {
      _id
      purchaseDate
      customer {
        _id
        email
      }
      products {
        productId {
          _id
        }
        selectedSize
        quantity
      }
      shippingAddress {
        name
        line1
        line2
        city
        state
        zip
        country
      }
      billingAddress {
        name
        line1
        line2
        city
        state
        zip
        country
      }
      subtotal
      fulfilled
      paymentStatus
    }
  }
`;
