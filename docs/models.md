## Models: how clients view the data

### Address
```
{
  id: [FirebaseId],
  longitude: 40.0150,
  latitude: 105.2705,
  address: '123 Main St',
  address_2: 'idk why this would be here for a bar',
  city: 'Boulder',
  state: 'CO',
  postal_code: '80101',
  country: 'US',
}
```

### Bar

```
{
  id: [FirebaseId],
  name: 'License No 1',
  Address: {Address},
  DrinkUp: {DrinkUp},
  Special: {Special},
}
```

### DrinkUp
```
{
  id: [FirebaseId],
  Users: [ {User} ],
}
```

### Invitation
```
{
  id: [FirebaseId],
  responses: [
    {
      status: '(accepted|reported)',
      user_id: [User ID],
      message: "We're in the back, to the left of the bar",
      created_at: '2017-02-25T17:58:13Z',
    },
  ]
}
```

### Message
These would be sent as push notifications.
```
{
  id: [FirebaseId],
  from_id: [User ID],
  to_id: [User ID],
  message: "We're in the back, to the left of the bar",
  read_at: '2017-02-25T17:58:13Z',
  created_at: '2017-02-25T17:58:13Z',
}
```

### Special
```
{
  id: [FirebaseId],
  days: {
    'mon': {
      from: '18:00',
      to: '02:00',
    },
    ...
  },
  active: {
    from: '2017-02-25',
    to: '2017-03-25',
  },
  Bar: {Bar},
}
```

### User
```
{
  id: [FirebaseId],
  first_name: 'George',
  icon: 'beer',
  location: {
    longitude: 40.0150,
    latitude: 105.2705,
    updated_at: '2017-02-25T17:58:13Z',
  }
  avatars: {
    sm: 'https://path.to/file-sm.png',
    md: 'https://path.to/file-md.png',
    lg: 'https://path.to/file-lg.png',
  }
}
```
