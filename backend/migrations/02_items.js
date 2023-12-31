/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('items', function (table) {
    table.increments('item_id');
    table.string('item');
    table.string('description', 1000);
    table.integer('quantity');
    table.string('uid');
    table.foreign('uid').references('users.uid')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('items')
};
