
exports.up = function(knex) {
    return knex.schema.createTable("strains", strains =>{
        strains.increments("strain_id");
        strains.string('name')
            .notNullable()
            .unique();
        strains.string('race')
            .notNullable();
        strains.text('description');
        strains.string('positive');
        strains.string('negative');
        strains.string('medical');
        strains.string('flavors');
    
    })
    
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("strains");
};
