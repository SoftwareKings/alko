import { Images } from '../Themes';

export const unjoinedMembersData = [
  {
    icon: 'martini',
    name: 'Abby',
    arrived: true,
  },
  {
    icon: 'beer',
    name: 'Danny',
    arrived: true,
  },
  {
    icon: 'highball',
    name: 'Joshua',
    arrived: true,
  },
  {
    icon: 'margarita',
    name: 'Jarod',
    arrived: true,
  },
  {
    icon: 'tumbler',
    name: 'Maggie',
    arrived: false,
  },
];

export const joinedMembersData = [
  {
    name: 'Abby',
    avatar: Images.abby,
    message: 'Hey! we\'re at the bar, near the kitchen! I\'m wearing a purple shirt and jeans.',
    arrived: true,
  },
  {
    name: 'Danny',
    avatar: Images.danny,
    message: 'Hey! I\'m Danny and nice to meet you.',
    messagesRead: true,
    arrived: true,
  },
  {
    name: 'Joshua',
    avatar: Images.joshua,
    arrived: true,
  },
  {
    name: 'Jamie',
    avatar: Images.jamie,
    arrived: true,
  },
  {
    name: 'Kyle',
    avatar: Images.kyle,
    arrived: true,
  },
  {
    name: 'Amanda',
    avatar: Images.sampleAvatar,
    arrived: false,
  },
];

export const requestingMember = {
  name: 'Amanda',
  avatar: Images.sampleAvatar,
  distance: 0.4,
};
