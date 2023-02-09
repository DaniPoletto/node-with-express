'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('People', [{
       name: 'Daniela',
       active: true,
       email: 'teste@teste.com.br',
       role: 'docente',
       createdAt: new Date(),
       updatedAt: new Date()
    },
    {
      name: 'John Doe',
      active: true,
      email: 'teste1@teste.com.br',
      role: 'aluno',
      createdAt: new Date(),
      updatedAt: new Date()
   },
   {
    name: 'Mateus',
    active: false,
    email: 'teste2@teste.com.br',
    role: 'docente',
    createdAt: new Date(),
    updatedAt: new Date()
 }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
