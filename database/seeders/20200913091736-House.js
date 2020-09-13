'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Houses",
      [
        {
          userId: 1,
          image: 'House_123.jpg',
          description: 'This house is located in Kigali City, Nyarugenge,...',
          location: 'Kigali, Nyaruenge',
          numberOfBathroom: 1,
          numberOfBedroom: 2,
          price: 30000,
          status: 'Available',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],

      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Houses", null, {})
};
