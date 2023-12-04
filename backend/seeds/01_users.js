/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {user_id: 1, "first name": 'john', "last name": 'wallan', username: 'johnwallan@gmail.com', password: "test"},
    {user_id: 2, "first name": 'jane', "last name": 'smith', username: 'janesmith@gmail.com', password: "test2"}
  ]);
};
