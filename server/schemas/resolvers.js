const { User, Clothing } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (_root, _args, context) => {
      if (context.user) {
        const userData = await User.findById(context.user._id);

        return userData;
      }
      throw new AuthenticationError('Not logged in');
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
    // create User mutation
    createUser: async (_root, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // login mutation
    login: async (_root, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
  },
  // Mutation for adding a clothing item
  addClothing: async (_root, args, context) => {
    // if the context has a 'user' property that contains the 'admin' role in its 'roles' array
    // then allow the mutation to execute
    // This will be commented out for now to not interfere with the front end
    // if (context.user.roles.includes('admin')) {
    //   const clothing = await Clothing.create({ ...args });
    //   return clothing;
    // }
    // // if the user is not an admin, throw an error
    // throw new AuthenticationError('Not authorized');
    const clothing = await Clothing.create({ ...args });
    return clothing;
  },
};

module.exports = resolvers;
