
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('strains').del()
    .then(function () {
      // Inserts seed entries
      return knex('strains').insert([
        { 
          strain_id: 1,
          name: "Afpak",
          race: "hybrid",
          flavors: "['Earthy', 'Chemical', 'Pine']",
          positive: "['Relaxed', 'Hungry', 'Happy', 'Sleepy']",
          negative: "['Dizzy']",
          medical: "['Depression', 'Insomnia', 'Pain', 'Stress', 'Lack of Appetite']",
          description: "['Afpak, named for its direct Afghani and Pakistani landrace heritage, is a beautiful indica-dominant hybrid with light green and deep bluish purple leaves. The taste and aroma are floral with a touch of lemon, making the inhale light and smooth. Its effects start in the stomach by activating the appetite. There is also a potent relaxation that starts in the head and face, and gradually sinks down into the body. Enjoy this strain if you’re suffering from stress, mild physical discomfort, or having difficulty eating. \\xa0']",
          
        },
      ]);
    });
};
