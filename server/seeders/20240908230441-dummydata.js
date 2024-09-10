'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		*/
		// await queryInterface.bulkInsert('Users', [
		// {
		// 	name: 'Spoorthi',
		// 	email: 'spoorthi@gmail.com',
		// 	age: 19,
		// 	phone: 1234567891,
		// 	bloodGroup: 'A+',
		// 	createdAt: new Date(),
		// 	updatedAt: new Date()
		// },
		// {
		// 	name: 'Manudeep',
		// 	email: 'Manudeep@gmail.com',
		// 	age: 20,
		// 	phone: 1234567891,
		// 	bloodGroup: 'B+',
		// 	createdAt: new Date(),
		// 	updatedAt: new Date()
		// },
		// {
		// 	name: 'Anirudh',
		// 	email: 'Anirudh@gmail.com',
		// 	age: 50,
		// 	phone: 1234567891,
		// 	bloodGroup: 'B+',
		// 	createdAt: new Date(),
		// 	updatedAt: new Date()
		// },
		// {
		// 	name: 'Ankit',
		// 	email: 'Ankit@gmail.com',
		// 	age: 19,
		// 	phone: 1234567891,
		// 	bloodGroup: 'A+',
		// 	createdAt: new Date(),
		// 	updatedAt: new Date()
		// },
		// {
		// 	name: 'Rahul',
		// 	email: 'Rahul@gmail.com',
		// 	age: 20,
		// 	phone: 1234567891,
		// 	bloodGroup: 'B+',
		// 	createdAt: new Date(),
		// 	updatedAt: new Date()
		// },
		// {
		// 	name: 'Stuthi',
		// 	email: 'Stuthi@gmail.com',
		// 	age: 50,
		// 	phone: 1234567891,
		// 	bloodGroup: 'B+',
		// 	createdAt: new Date(),
		// 	updatedAt: new Date()
		// },
		// {
		// 	name: 'Vinoop',
		// 	email: 'Vinoop@gmail.com',
		// 	age: 19,
		// 	phone: 1234567891,
		// 	bloodGroup: 'A+',
		// 	createdAt: new Date(),
		// 	updatedAt: new Date()
		// },
		// {
		// 	name: 'KK',
		// 	email: 'KK@gmail.com',
		// 	age: 20,
		// 	phone: 1234567891,
		// 	bloodGroup: 'B+',
		// 	createdAt: new Date(),
		// 	updatedAt: new Date()
		// },
		// {
		// 	name: 'Amogh',
		// 	email: 'Amogh@gmail.com',
		// 	age: 50,
		// 	phone: 1234567891,
		// 	bloodGroup: 'B+',
		// 	createdAt: new Date(),
		// 	updatedAt: new Date()
		// },
		// ], {});
		// await queryInterface.bulkInsert('Units', [
		// 	{
		// 		bloodGroup: 'A-',
		// 		count: 25,
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		// 		bloodGroup: 'B-',
		// 		count: 28,
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		// 		bloodGroup: 'O-',
		// 		count: 19,
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		// 		bloodGroup: 'AB-',
		// 		count: 13,
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		// 		bloodGroup: 'AB+',
		// 		count: 35,
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// ], {});
		// await queryInterface.bulkInsert('Requests', [
		// 	{
		// 		name: 'Spoorthi',
		// 		userid: 5,
		// 		requestedBloodGroup: 'B+',
		// 		count: 1,
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		// 		name: 'Manudeep',
		// 		userid: 6,
		// 		requestedBloodGroup: 'AB+',
		// 		count: 1,
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		// 		name: 'Anirudh',
		// 		userid: 7,
		// 		requestedBloodGroup: 'B-',
		// 		count: 3,
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		// 		name: 'Ankit',
		// 		userid: 8,
		// 		requestedBloodGroup: 'AB-',
		// 		count: 4,
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		// 		name: 'Rahul',
		// 		userid: 9,
		// 		requestedBloodGroup: 'O+',
		// 		count: 1,
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		// 		name: 'Stuthi',
		// 		userid: 10,
		// 		requestedBloodGroup: 'B+',
		// 		count: 1,
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		// 		name: 'Vinoop',
		// 		userid: 11,
		// 		requestedBloodGroup: 'B+',
		// 		count: 3,
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		// 		name: 'KK',
		// 		userid: 12,
		// 		requestedBloodGroup: 'A+',
		// 		count: 1,
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		// 		name: 'Amogh',
		// 		userid: 13,
		// 		requestedBloodGroup: 'O+',
		// 		count: 3,
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// ], {});
		await queryInterface.bulkInsert('Donations', [
			{
				name: 'Spoorthi',
				userid: 5,
				donatedBloodGroup: 'B+',
				count: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Manudeep',
				userid: 6,
				donatedBloodGroup: 'AB+',
				count: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Anirudh',
				userid: 7,
				donatedBloodGroup: 'B-',
				count: 3,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Ankit',
				userid: 8,
				donatedBloodGroup: 'AB-',
				count: 4,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Rahul',
				userid: 9,
				donatedBloodGroup: 'O+',
				count: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Stuthi',
				userid: 10,
				donatedBloodGroup: 'B+',
				count: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Vinoop',
				userid: 11,
				donatedBloodGroup: 'B+',
				count: 3,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'KK',
				userid: 12,
				donatedBloodGroup: 'A+',
				count: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Amogh',
				userid: 13,
				donatedBloodGroup: 'O+',
				count: 3,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			// {
			// 	name: 'Amith',
			// 	userid: 14,
			// 	donatedBloodGroup: 'O+',
			// 	count: 3,
			// 	createdAt: new Date(),
			// 	updatedAt: new Date()
			// },
			// {
			// 	name: 'Ananya',
			// 	userid: 15,
			// 	donatedBloodGroup: 'O+',
			// 	count: 3,
			// 	createdAt: new Date(),
			// 	updatedAt: new Date()
			// },
			// {
			// 	name: 'Anvitha',
			// 	userid: 16,
			// 	donatedBloodGroup: 'O+',
			// 	count: 3,
			// 	createdAt: new Date(),
			// 	updatedAt: new Date()
			// },
			// {
			// 	name: 'Rohan',
			// 	userid: 17,
			// 	donatedBloodGroup: 'O+',
			// 	count: 3,
			// 	createdAt: new Date(),
			// 	updatedAt: new Date()
			// },
		], {});
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	}
};
