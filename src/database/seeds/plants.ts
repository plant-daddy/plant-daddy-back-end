import { createConnection } from 'typeorm';

async function seed() {
  const connection = await createConnection();

  await connection.query(
    `INSERT INTO soils(name) values ('Fir bark'), ('Pine bark'), ('Perlite'), ('Peat moss'), ('Humus'), ('Vermiculite'), ('Clay')`
  );

  await connection.query(
    `INSERT INTO plant_types(name) values ('Succulents'), ('Perennial'), ('Tree'), ('Broadleaf'), ('Evergreen')`
  );

  await connection.query(
    `INSERT INTO plants(type_id, description, image_url, common_name, scientific_name, temperature_min, temperature_max, watering_frequency, fertilize_frequency, toxicity_description, sun_exposure) values
      (
        1,
        'One of the most popular bamboo plants in the United States. It can reach heights of 30 feet but more typically it is in the 10-20 foot range.  It can spread aggressively so plant it carefully and keep it contained.  Planting between hardscape elements helps with this so it makes an excellent screening or privacy hedge for a driveway or walkway planting.',
        'https://images.tcdn.com.br/img/img_prod/631929/essencia_de_bamboo_100ml_139_1_20201009140011.png',
        'Bamboo',
        'Phyllostachys aurea',
        20,
        30,
        168,
        96,
        'This plant is almost not toxic to pets or humans. Before they can be eaten, they have to be cut like fibrous parts, and then the sprouts need to be boiled. When eaten raw, bamboo contains a toxin that produces cyanide in the intestine.',
        'Bamboo prefers a spot that gets full sun to partial shade. Too much shade can result in a weak plant that does not grow to its fullest potential or develop its brilliant color. Indoors, keep your bamboo by your brightest window, and rotate the pot every week or so to be sure all sides of the plant get light.'
      ),
      (
        2,
        'All cactus plants are members of the Cactaceae family, and there are thousands of species in all. There are two large groups of cacti grown as houseplants: desert cacti and forest cacti. Both are popular and familiar, and both can thrive indoors with relatively little maintenance. Cactus plants come in many sizes, but most indoor varieties are small to moderate.',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudD_iLJuVL6vwa2WdTLXWbSfHvAJT1kdZQXvav8MLEHJtlpFBN2mY3Zu--3lAtw11B8I&usqp=CAU',
        'Cactus',
        'Cactaceae',
        24,
        32,
        336,
        336,
        'This plant is not toxic to pets or humans but it has thorns that can hurt.',
        'Strong light is essential for healthy desert cacti, especially in the winter. Some species may scorch in direct summer sun if they haven''t been hardened off first. Forest cacti like bright, but not direct, sunlight. Move them outside during the summer.'
      ),
      (
        3,
        'You might be most familiar with eucalyptus as a favorite food of the koala. This evergreen tree can grow to 60 feet high or more in its natural Australian environment, but in home gardens it usually remains small at around 6 to 10 feet high. It features reddish-brown bark that peels on the smaller branches.',
        'https://www.ikea.com/mx/en/images/products/fejka-artificial-potted-plant-in-outdoor-eucalyptus__0674947_pe718059_s5.jpg',
        'Eucalyptus',
        'Eucalyptus cinerea',
        28,
        36,
        168,
        336,
        'The bark, leaves, and sap of eucalyptus are toxic both to humans and pets.',
        'Eucalyptus likes a lot of light, so settle your plant somewhere in your landscape that receives at least six hours of direct sunlight daily. Likewise, eucalyptus plants grown indoors should be kept near a bright window, preferably one that faces south.'
      ),
      (
        4,
        'When many people think of orchids, they probably picture a flower from the Cattleya genus. Cattleya orchids typically feature showy, fragrant flowers that come in a wide variety of shapes, colors, and color combinations. Many of the species sport quite large blooms that stretch several inches across while others have smaller but no less beautiful blooms.',
        'https://www.gardeningknowhow.com/wp-content/uploads/2021/03/orchid-houseplant.jpg',
        'Orchid',
        'Cattleya',
        14,
        20,
        336,
        730,
        'This plant is not toxic to pets or humans.',
        'These orchids need bright indirect light for optimal growth. When grown as a houseplant, an east (or west) facing window that gets a lot of light is ideal. However, any harsh midday sun that comes through the window should be diffused with a sheer curtain. Similarly, the orchids like outdoor sunlight in the morning but should be protected from the strong afternoon sun.'
      ),
      (
        5,
        'Dracaena trifasciata, commonly known as the snake plant, is one of the most popular and hardy species of houseplants. Up until 2017, it was botanically classified as Sansevieria trifasciata, but its commonalities with Dracaena species were too many to overlook. The plant features stiff, sword-like leaves ranging from 6 inches to 8 feet tall.',
        'https://www.mashtalegypt.com/media/snake-plant-1.jpg',
        'Snake plant',
        'Dracaena trifasciata',
        18,
        25,
        168,
        730,
        'This plant is toxic to cats and dogs. Ingestion may cause nausea, vomiting or diarrhea.',
        'This evergreen prefers bright, indirect sunlight in temperatures that remain consistently between 65 and 75 degrees Fahrenheit. Too much direct light in warmer months may burn the foliage. Still, set indoor plants outside at least once a year in direct sunlight to encourage lush growth.'
      )
    `
  );

  await connection.query(
    `INSERT INTO plants_soils(plant_id, soil_id) values
      (1, 1), (1, 2),
      (2, 2), (2, 3), (2, 4),
      (3, 1), (3, 5),
      (4, 1), (4, 4),
      (5, 2), (5, 3), (5, 5)
    `
  );

  await connection.close();
}

seed().then(() => console.log('Plants created!'));
