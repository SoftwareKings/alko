import { Images } from '../Themes';

export const membersData = [
  {
    bar: 1,
    members: [],
  },
  {
    bar: 2,
    members: [
      {
        name: 'Abby',
        avatar: Images.abby,
        icon: 'martini',
        message: 'Hey! we\'re at the bar, near the kitchen! I\'m wearing a purple shirt and jeans.',
        arrived: true,
      },
      {
        name: 'Danny',
        icon: 'beer',
        avatar: Images.danny,
        message: 'Hey! I\'m Danny and nice to meet you.',
        messagesRead: true,
        arrived: true,
      },
      {
        name: 'Joshua',
        avatar: Images.joshua,
        icon: 'highball',
        arrived: true,
      },
      {
        name: 'Jamie',
        avatar: Images.jamie,
        icon: 'margarita',
        arrived: true,
      },
      {
        name: 'Kyle',
        avatar: Images.kyle,
        icon: 'tumbler',
        arrived: true,
      },
    ],
  },
  {
    bar: 3,
    members: [],
  },
  {
    bar: 4,
    members: [],
  },
  {
    bar: 5,
    members: [
      {
        name: 'Larissa',
        avatar: Images.jamie,
        icon: 'margarita',
        arrived: true,
      },
      {
        name: 'Damian',
        avatar: Images.kyle,
        icon: 'tumbler',
        arrived: true,
      },
      {
        name: 'Greg',
        avatar: Images.danny,
        icon: 'tumbler',
        arrived: true,
      },
    ],
  },
  {
    bar: 6,
    members: [],
  },
];

export const requestingMember = {
  name: 'Amanda',
  icon: 'highball',
  avatar: Images.sampleAvatar,
  distance: 0.4,
};
