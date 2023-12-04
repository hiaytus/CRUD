/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {item_id: 1, item: 'book', description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti", quantity: 2, uid: "mIcbqbVKWJZXSaplPiFBuqeHC5M2"},
    {item_id: 2, item: 'pencil', description: "facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo mi", quantity: 1, uid: "mIcbqbVKWJZXSaplPiFBuqeHC5M2"},
    {item_id: 3, item: 'eraser', description: "turi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi ", quantity: 5, uid: "gV2jCIcoRhh59TllEeOHkW9VnF03"},
  ]);
};
