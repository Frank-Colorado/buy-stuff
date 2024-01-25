const { User, Clothing } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (_root, _args, context) => {
      if (context.user) {
        try {
          const userData = await User.findById(context.user._id);

          return userData;
        } catch (err) {
          console.log('Error getting user data', err);
          throw new AuthenticationError('Failed to get user data');
        }
      }
      throw new AuthenticationError('Not logged in');
    },
    // Get all clothing items
    allClothing: async () => {
      try {
        const clothing = await Clothing.find();
        return clothing;
      } catch (err) {
        console.log(err);
      }
    },
    // Get a single clothing item by its _id
    clothingById: async (_root, { clothingId }) => {
      try {
        const clothing = await Clothing.findById(clothingId);
        return clothing;
      } catch (err) {
        console.log(err);
      }
    },
    // Get all clothing items by category
    clothingByCategory: async (_root, { category }) => {
      try {
        const clothing = await Clothing.find({ category });
        return clothing;
      } catch (err) {
        console.log(err);
      }
    },
  },
  Mutation: {
    // Mutation for creating a new user
    createUser: async (_root, { username, email, password }) => {
      try {
        // create a new user
        const user = await User.create({ username, email, password });
        // create a token with the new user info
        const token = signToken(user);
        // return the token and user as an Auth object
        return { token, user };
      } catch (err) {
        console.log('Error creating user', err);
        throw new AuthenticationError('Failed to create user');
      }
    },
    // login mutation
    login: async (_root, { email, password }) => {
      try {
        // find the user by email
        const user = await User.findOne({ email });
        // if the user is not found, throw an error
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
        // check if the password is correct
        const correctPw = await user.isCorrectPassword(password);
        // if the password is not correct, throw an error
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
        // if email and password are correct, create a token with the user info
        const token = signToken(user);
        // return the token and user as an Auth object
        return { token, user };
      } catch (err) {
        console.log('Error logging in', err);
        throw new AuthenticationError('Failed to log in');
      }
    },
    // Mutation for adding a clothing item
    addClothing: async (_root, args, context) => {
      // if the context has a 'user' property that contains the 'admin' role in its 'roles' array
      // then allow the mutation to execute
      // if (context.user.roles.includes('admin')) {
      try {
        const clothing = await Clothing.create({ ...args });
        return clothing;
      } catch (err) {
        console.log('Error adding clothing', err);
        throw new Error('Failed to create clothing item');
      }
      // }
      // // if the user is not an admin, throw an error
      // throw new AuthenticationError('Not authorized');
    },
    // Mutation for updating a specific clothing item using its _id
    updateClothing: async (_root, args, context) => {
      const { clothingId } = args;
      // if the context has a 'user' property that contains the 'admin' role in its 'roles' array
      // then allow the mutation to execute
      // This will be commented out for now to not interfere with the front end
      // if (context.user.roles.includes('admin')) {
      try {
        const clothing = await Clothing.findByIdAndUpdate(
          clothingId,
          {
            ...args,
          },
          { new: true }
        );
        return clothing;
      } catch (err) {
        console.log('Error updating clothing', err);
        throw new Error('Failed to update clothing item');
      }
      // }
      // // if the user is not an admin, throw an error
      // throw new AuthenticationError('Not authorized');
    },
    // Mutation for deleting a specific clothing item using its _id
    deleteClothing: async (_root, { clothingId }, context) => {
      // if the context has a 'user' property that contains the 'admin' role in its 'roles' array
      // then allow the mutation to execute
      // This will be commented out for now to not interfere with the front end
      // if (context.user.roles.includes('admin')) {
      try {
        const clothing = await Clothing.findByIdAndDelete(clothingId);
        return clothing;
      } catch (err) {
        console.log('Error deleting clothing', err);
        throw new Error('Failed to delete clothing item');
      }
      // }
      // // if the user is not an admin, throw an error
      // throw new AuthenticationError('Not authorized');
    },
  },
};

module.exports = resolvers;
