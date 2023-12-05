/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {user_id: 1, firstName: 'buck', lastName: 'doe', username: "dog@gmail.com", uid: "vF0FHZLdezOlk5eXLNbE5UPSgyM2"},
    {user_id: 2, firstName: 'jane', lastName: 'smith', username: "test@gmail.com", uid: "mIcbqbVKWJZXSaplPiFBuqeHC5M2"}
  ]);
};
