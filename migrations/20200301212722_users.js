exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users.increments("user_id");

    users.string("first_name", 128).notNullable();

    users.string("last_name", 128).notNullable();

    users
      .string("email", 128)
      .notNullable()
      .unique();
    users.string("password", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
