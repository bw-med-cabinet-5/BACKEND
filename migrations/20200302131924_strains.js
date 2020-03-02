
exports.up = function(knex) {
    return knex.schema.createTable("strains", strains =>{
        strains.increments('strain_id');
        strains.string('strain_name')
            .notNullable()
            .unique();
        strains.string('strain_type')
            .notNullable();
        strains.integer('strain_rating');
        strains.text('strain_description');
        strains.string('strain_positive_effect');
        strains.string('strain_negative_effect');
        strains.string('strain_medical_effect');
        strains.string('strain_flavors');
    
    })
    
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("strains");
};
