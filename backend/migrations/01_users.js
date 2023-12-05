/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('user_id');
    table.string('firstName');
    table.string('lastName');
    table.string('username');    // username/email stored in Firebase
    // table.string('password');    password stored in Firebase
    table.string('uid').unique(); // userID association with Firebase
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
