import Images from './images';

function generateVoteCount() {
  return Math.floor(Math.random() * 50 + 15);
}

function Data() {
  return [
    {
      id: 1,
      title: 'Yellow Pail',
      description: 'On-demand sand castle construction expertise.',
      url: '#',
      votes: generateVoteCount(),
      submitter_avatar_url: Images.Avatars.daniel,
      product_image_url: Images.Products.aqua,
    },
    {
      id: 2,
      title: 'Supermajority: The Fantasy Congress League',
      description:
        'Earn points when your favorite politicians pass legislation.',
      url: '#',
      votes: generateVoteCount(),
      submitter_avatar_url: Images.Avatars.kristy,
      product_image_url: Images.Products.rose,
    },
    {
      id: 3,
      title: 'Tinfoild: Tailored tinfoil hats',
      description: 'We already have your measurements and shipping address.',
      url: '#',
      votes: generateVoteCount(),
      submitter_avatar_url: Images.Avatars.veronika,
      product_image_url: Images.Products.steel,
    },
    {
      id: 4,
      title: 'Haught or Naught',
      description: 'High-minded or absent-minded? You decide.',
      url: '#',
      votes: generateVoteCount(),
      submitter_avatar_url: Images.Avatars.molly,
      product_image_url: Images.Products.yellow,
    },
  ];
}

export default Data();
