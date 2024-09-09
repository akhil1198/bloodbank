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
		await queryInterface.bulkInsert('Users', [
			{
				id: 1,
				name: 'Alice',
				email: 'alice@example.com',
				age: 19,
				phone: 1234567891,
				bloodGroup: 'A+',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 2,
				name: 'akhil',
				email: 'akhil@example.com',
				age: 20,
				phone: 1234567891,
				bloodGroup: 'B+',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 3,
				name: 'shridhar',
				email: 'shridhar@example.com',
				age: 50,
				phone: 1234567891,
				bloodGroup: 'B+',
				createdAt: new Date(),
				updatedAt: new Date()
			},
		], {});
		await queryInterface.bulkInsert('Units', [
			{
				id: 1,
				bloodGroup: 'A+',
				count: 10,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 2,
				bloodGroup: 'B+',
				count: 25,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 3,
				bloodGroup: 'O+',
				count: 15,
				createdAt: new Date(),
				updatedAt: new Date()
			},
		], {});
		await queryInterface.bulkInsert('Requests', [
			{
				id: 1,
				name: 'Alice',
				userid: 1,
				requestedBloodGroup: 'A+',
				count: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 2,
				name: 'akhil',
				userid: 2,
				requestedBloodGroup: 'B+',
				count: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 3,
				name: 'shridhar',
				userid: 3,
				requestedBloodGroup: 'O+',
				count: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
		], {});
		await queryInterface.bulkInsert('Donations', [
			{
				id: 1,
				name: 'Alice',
				userid: 1,
				bloodGroup: 'A+',
				count: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 2,
				name: 'akhil',
				userid: 2,
				bloodGroup: 'B+',
				count: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 3,
				name: 'shridhar',
				userid: 3,
				bloodGroup: 'O+',
				count: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
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
