/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {user_id: 1, firstName: 'john', lastName: 'wallan',  uid: "mIcbqbVKWJZXSaplPiFBuqeHC5M2"},
    {user_id: 2, firstName: 'jane', lastName: 'smith', uid: "gV2jCIcoRhh59TllEeOHkW9VnF03"}
  ]);
};
