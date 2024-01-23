const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    roles: [String]
  }

  type Size {
    size: String
    inStock: Boolean
  }

  type Clothing {
    _id: ID
    name: String
    description: String
    category: String
    subtype: String
    price: Float
    sizes: [Size]
    imageUrl: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input SizeInput {
    size: String
    inStock: Boolean
  }

  type Query {
    me: User
    clothingById(clothingId: ID!): Clothing
    clothingByCategory(category: String!): [Clothing]
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
      sizes: [SizeInput]!
      imageUrl: String
    ): Clothing
    updateClothing(
      clothingId: ID!
      name: String
      description: String
      category: String
      subtype: String
      price: Float
      sizes: [SizeInput]
      imageUrl: String
    ): Clothing
    deleteClothing(clothingId: ID!): Clothing
  }
`;

module.exports = typeDefs;
