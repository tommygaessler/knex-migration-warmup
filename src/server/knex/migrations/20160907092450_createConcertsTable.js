
'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('concerts', function (table) {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.decimal('price').notNullable().defaultTo(1.00);
    table.timestamp('started_at').defaultTo(knex.fn.now());
    table.timestamp('ended_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('concerts');
};
