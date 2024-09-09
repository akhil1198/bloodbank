'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
		await queryInterface.createTable('Units', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,  // Auto increment ID
				primaryKey: true,     // Primary Key
				allowNull: false
			},
			bloodGroup: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			count: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			}
		});

		await queryInterface.createTable('Donations', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,  // Auto increment ID
				primaryKey: true,     // Primary Key
				allowNull: false
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			userid: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Users',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			donatedBloodGroup: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			count: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			}
		});

		await queryInterface.createTable('Requests', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,  // Auto increment ID
				primaryKey: true,     // Primary Key
				allowNull: false
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			userid: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Users',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			requestedBloodGroup: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			count: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			}
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
