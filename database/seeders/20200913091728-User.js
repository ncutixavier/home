'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        phone: '+250788767676',
        role: 'landlord',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'John Smith',
        email: 'johnsmith@ahome.com',
        phone: '+250788534231',
        role: 'client',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
