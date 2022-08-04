const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		users: async () => {
			return User.find().populate('savedProjects');
		},
		me: async (parent, args, context) => {
			if (context.user) {
				return User.findOne({ _id: context.user._id }).populate('savedProjects');
			}
			throw new AuthenticationError('You need to be logged in!');
		}
	},
	Mutation: {
		addUser: async (parent, { email, password }) => {
			const user = await User.create({ email, password });
			const token = signToken(user);

			return { token, user };
		},
		login: async (parent, { email, password }) => {
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
		saveProject: async (parent, { project }, context) => {
			if (context.user) {
				return User.findOneAndUpdate(
					{ _id: context.user._id },
					{
						$addToSet: {
							savedProjects: project
						}
					},
					{
						new: true
					}
				);
			}

			throw new AuthenticationError('You need to be logged in!');
		},
		removeProject: async (parent, { projectId }, context) => {
			if (context.user) {
				return User.findOneAndUpdate(
					{ _id: context.user._id },
					{
						$pull: { savedProjects: { projectId: projectId } }
					},
					{ new: true }
				);
			}

			throw new AuthenticationError('You need to be logged in!');
		}
	}
};

module.exports = resolvers;
