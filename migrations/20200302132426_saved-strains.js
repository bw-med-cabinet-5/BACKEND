
exports.up = function(knex) {
  return knex.schema.createTable('saved_strains', saved_strains => {
    saved_strains.increments('saved_strain_id');
    saved_strains.integer('user')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    saved_strains.integer('strain')
        .unsigned()
        .notNullable()
        .references('strain_id')
        .inTable('strains')
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("saved_strains");
};
