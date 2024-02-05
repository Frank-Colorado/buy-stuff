require('dotenv').config();
const { User, Clothing, Order } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const resolvers = {
  Query: {
    // Get user data
    me: async (_root, _args, context) => {
      // if the user is logged in
      if (context.user) {
        try {
          // find the user by the user's _id and populate the user's orders
          const userData = await User.findById(context.user._id).populate({
            path: 'orders',
            select: '-__v',
          });
          // return the user data
          return userData;
        } catch (err) {
          // Error handling for getting user data
          console.log('Error getting user data', err);
          throw new Error('Failed to get user data');
        }
      }
      // if the user is not logged in, throw an error
      throw new AuthenticationError('Not logged in');
    },
    // Get all clothing items
    allClothing: async () => {
      try {
        // find all clothing items
        const clothing = await Clothing.find();
        // return the clothing items
        return clothing;
      } catch (err) {
        // Error handling for getting all clothing items
        console.log('Error getting all clothing', err);
        throw new Error('Failed to get clothing items');
      }
    },
    // Get a single clothing item by its _id
    clothingById: async (_root, { clothingId }) => {
      try {
        // find a clothing item by its _id
        const clothing = await Clothing.findById(clothingId);
        // return the clothing item
        return clothing;
      } catch (err) {
        // Error handling for getting a single clothing item by its _id
        console.log('Error getting clothing by id', err);
        throw new Error('Failed to get clothing item by id');
      }
    },
    // Get all clothing items by category
    clothingByCategory: async (_root, { category, limit = 1, offset = 0 }) => {
      try {
        // use Promise.all to run both queries at the same time
        const [count, clothing] = await Promise.all([
          // Find the count of all clothing items in the category
          Clothing.find({ category }).countDocuments(),
          // Find all clothing items in the category and limit the results
          Clothing.find({ category }).skip(offset).limit(limit),
        ]);
        // return the clothing items and the count of all clothing items in the category
        return { clothing, count };
      } catch (err) {
        // Error handling for getting all clothing items by category
        console.log('Error getting clothing by category', err);
        throw new Error('Failed to get clothing items by category');
      }
    },
    // Checkout query
    checkout: async (_root, { items, form }, context) => {
      // create a url variable to store the base URL from the request
      const url = new URL(context.headers.referer).origin;
      // create a new form object in the session
      context.session.form = form;
      // create lineItems for the stripe checkout session
      const lineItemsPromises = items.map(async (item) => {
        try {
          // Create a new stripe product for each item in the cart
          const stripeProuct = await stripe.products.create({
            name: item.name,
            description: item.size,
            images: [item.image],
          });
          // create a new stripe price for each item in the cart
          const stripePrice = await stripe.prices.create({
            product: stripeProuct.id,
            unit_amount: item.price * 100,
            currency: 'usd',
          });
          // return the price and quantity for each item in the cart
          return {
            price: stripePrice.id,
            quantity: item.quantity,
          };
        } catch (err) {
          // Error handling for creating stripe product and price
          console.error(
            `Error creating Stripe product for item ${item.name}:`,
            err.message
          );
          return {
            error: `Error creating Stripe product for item ${item.name}`,
          };
        }
      });
      // get the line items from the Promise.all
      const lineItems = await Promise.allSettled(lineItemsPromises);
      // filter out any rejected promises
      const line_items = lineItems
        .filter((result) => result.status === 'fulfilled')
        .map((result) => result.value);
      // create a new stripe checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });
      // return the session id
      return { session: session.id };
    },
    // Get a single order by its _id
    getOrder: async (_root, { orderId }, context) => {
      // if the user is logged in
      if (context.user) {
        try {
          // find the order by its _id
          const order = await Order.findById(orderId).populate(
            'products.productId'
          );
          // return the order
          return order;
        } catch (err) {
          // Error handling for getting a single order by its _id
          console.log('Error getting order', err);
          throw new Error('Failed to get order');
        }
      }
      // if the user is not logged in, throw an error
      throw new AuthenticationError('Not logged in');
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
        // Error handling for creating a new user
        console.log('Error creating user', err);
        throw new Error('Failed to create user');
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
        // Error handling for logging in
        console.log('Error logging in', err);
        throw new Error('Failed to log in');
      }
    },
    // Mutation for adding a clothing item
    addClothing: async (_root, args, context) => {
      // if the context has a 'user' property that contains the 'admin' role in its 'roles' array
      // then allow the mutation to execute
      if (context.user.roles.includes('admin')) {
        try {
          const clothing = await Clothing.create({ ...args });
          return clothing;
        } catch (err) {
          // Error handling for adding a clothing item
          console.log('Error adding clothing', err);
          throw new Error('Failed to create clothing item');
        }
      }
      // if the user is not an admin, throw an error
      throw new AuthenticationError('Not authorized');
    },
    // Mutation for updating a specific clothing item using its _id
    updateClothing: async (_root, args, context) => {
      const { clothingId } = args;
      // if the context has a 'user' property that contains the 'admin' role in its 'roles' array
      // then allow the mutation to execute
      if (context.user.roles.includes('admin')) {
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
          // Error handling for updating a specific clothing item
          console.log('Error updating clothing', err);
          throw new Error('Failed to update clothing item');
        }
      }
      // if the user is not an admin, throw an error
      throw new AuthenticationError('Not authorized');
    },
    // Mutation for deleting a specific clothing item using its _id
    deleteClothing: async (_root, { clothingId }, context) => {
      // if the context has a 'user' property that contains the 'admin' role in its 'roles' array
      // then allow the mutation to execute
      if (context.user.roles.includes('admin')) {
        try {
          const clothing = await Clothing.findByIdAndDelete(clothingId);
          return clothing;
        } catch (err) {
          // Error handling for deleting a specific clothing item
          console.log('Error deleting clothing', err);
          throw new Error('Failed to delete clothing item');
        }
      }
      // if the user is not an admin, throw an error
      throw new AuthenticationError('Not authorized');
    },
    // Mutation for adding an order
    addOrder: async (_root, { products, subtotal, paymentStatus }, context) => {
      try {
        // declare a variable to store the order data
        let orderData;
        // retrieve the form data from the express session
        const form = context.session.form;
        // if the form data is not found, throw an error
        if (!form) {
          throw new Error('Form data not found');
        }
        // If the user is logged in, use the user's _id as the customer
        if (context.user) {
          orderData = {
            products,
            customer: context.user._id,
            shippingAddress: form.shippingAddress,
            billingAddress: form.billingAddress,
            subtotal,
            paymentStatus,
          };
          // Create a new order with the orderData
          const order = await Order.create(orderData);
          // Then update the user's orders to include the new order
          await User.findByIdAndUpdate(context.user._id, {
            $push: { orders: order._id },
          });
          // Once the order is created, clear the form data from the session
          delete context.session.form;
          // return the order
          return order;
        }
        // If the user is not logged in, use the guestEmail as the customer
        if (!context.user) {
          orderData = {
            products,
            guestEmail: form.email,
            shippingAddress: form.shippingAddress,
            billingAddress: form.billingAddress,
            subtotal,
            paymentStatus,
          };
          // Create a new order with the orderData
          const order = await Order.create(orderData);
          // Once the order is created, clear the form data from the session
          delete context.session.form;
          // return the order
          return order;
        }
      } catch (err) {
        // Error handling for adding an order
        console.error('Error adding order', err);
        throw new Error('Failed to add order');
      }
    },
  },
};

module.exports = resolvers;
