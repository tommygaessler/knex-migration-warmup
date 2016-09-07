
'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('attendees', function (table) {
    table.increments();
    table.integer('concert_id').notNullable().references('id').inTable('concerts');
    table.string('name').notNullable().defaultTo('');
    table.integer('age').notNullable().defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('attendees');
};
