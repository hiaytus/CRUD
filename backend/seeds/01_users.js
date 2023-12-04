/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, first: 'john', last: 'wallan', username: 'johnwallan@gmail.com', password: "test"},
    {id: 2, first: 'jane', last: 'smith', username: 'janesmith@gmail.com', password: "test2"}
  ]);
};
