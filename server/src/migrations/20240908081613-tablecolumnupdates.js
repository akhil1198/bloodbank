'use strict';

const User = require('../models/User');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
		await queryInterface.addColumn('Requests', 'userid', {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'Users',
				key: 'id'
			},
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE'
		});
		await queryInterface.addColumn('Requests', 'phone', {
			type: Sequelize.INTEGER,
			allowNull: false
		});
		await queryInterface.addColumn('Requests', 'requestedBloodGroup', {
			type: Sequelize.CHAR,
			allowNull: false
		});
		await queryInterface.addColumn('Donations', 'userid', {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'Users',
				key: 'id'
			},
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE'
		});
		await queryInterface.addColumn('Donations', 'phone', {
			type: Sequelize.INTEGER,
			allowNull: false
		});
		await queryInterface.addColumn('Donations', 'bloodGroup', {
			type: Sequelize.CHAR,
			allowNull: false
		});
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
	}
};
