
exports.up = function(knex) {
    return knex.schema.createTable("strains", strains =>{
        strains.increments("strain_id");
        strains.string('name')
            .notNullable()
            .unique();
        strains.string('race')
            .notNullable();
        strains.text('description');
        strains.text('positive');
        strains.text('negative');
        strains.text('medical');
        strains.text('flavors');
        strains.text('Combined');
    
    })
    
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("strains");
};
