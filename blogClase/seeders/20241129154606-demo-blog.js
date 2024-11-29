'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('blogs',[
      {
        titulo:"Johnatan",
        descripcion:"lenguaje para la creacion de backed en js",
        createdAt:new Date(),
        updatedAt:new Date(),
      },
        {
        titulo:"Canwencio",
        descripcion:"lenguaje para la creacion de backed en js",
        createdAt:new Date(),
        updatedAt:new Date(),
        }
    ],{}) // ,{} esperaa registros.
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('blogs',null,{})
  }
};
