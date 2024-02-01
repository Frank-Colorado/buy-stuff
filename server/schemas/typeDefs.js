const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    roles: [String]
  }

  type Clothing {
    _id: ID
    name: String
    description: String
    category: String
    subtype: String
    price: Float
    sizes: [String]
    imageUrl: String
  }

  type Order {
    _id: ID
    purchaseDate: String
    customer: User
    guestEmail: String
    shippingAddress: Address
    billingAddress: Address
    products: [Clothing]
  }

  type Address {
    recipientName: String
    line1: String
    line2: String
    city: String
    state: String
    zip: String
    country: String
  }

  type ClothingResult {
    clothing: [Clothing]
    count: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    allClothing: [Clothing]
    clothingById(clothingId: ID!): Clothing
    clothingByCategory(
      category: String!
      limit: Int!
      offset: Int!
    ): ClothingResult
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addClothing(
      name: String!
      description: String!
      category: String!
      subtype: String!
      price: Float!
      sizes: [String]
      imageUrl: String
    ): Clothing
    updateClothing(
      clothingId: ID!
      name: String
      description: String
      category: String
      subtype: String
      price: Float
      sizes: [String]
      imageUrl: String
    ): Clothing
    deleteClothing(clothingId: ID!): Clothing
  }
`;

module.exports = typeDefs;
