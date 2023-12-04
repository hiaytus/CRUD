/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {id: 1, user_id: 1, item: 'book', description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti", quantity: 2},
    {id: 2, user_id: 1, item: 'pencil', description: "facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo mi", quantity: 1},
    {id: 3, user_id: 2, item: 'eraser', description: "turi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi ", quantity: 5},
  ]);
};
