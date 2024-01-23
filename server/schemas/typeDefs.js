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

  type Query {
    me: User
    clothingById(_id: ID!): Clothing
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
      sizes: [Size]!
      imageUrl: String
    ): Clothing
    updateClothing(
      _id: ID!
      name: String
      description: String
      category: String
      subtype: String
      price: Float
      sizes: [Size]
      imageUrl: String
    ): Clothing
    deleteClothing(_id: ID!): Clothing
  }
`;

module.exports = typeDefs;
