const { User } = require('../models');

const resolvers = {
  Query: {
    me: async (_root, _args, context) => {
      if (context.user) {
        const userData = await User.findById(context.user._id);

        return userData;
      }
      throw new AuthenticationError('Not logged in');
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
};

module.exports = resolvers;
