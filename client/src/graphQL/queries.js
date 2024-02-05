import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      roles
      orders {
        _id
        purchaseDate
        subtotal
        fulfilled
        paymentStatus
      }
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
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

export const QUERY_PRODUCT_BY_ID = gql`
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

export const QUERY_PRODUCT_BY_CATEGORY = gql`
  query clothingByCategory($category: String!, $limit: Int!, $offset: Int!) {
    clothingByCategory(category: $category, limit: $limit, offset: $offset) {
      clothing {
        _id
        name
        description
        category
        subtype
        price
        sizes
        imageUrl
      }
      count
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($items: [CartItemInput]!, $form: CheckoutFormInput!) {
    checkout(items: $items, form: $form) {
      session
    }
  }
`;
