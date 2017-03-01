## Schema: how the data is stored in database

Notes:
- Any capitalized key in a structure would represent a foreign model, and have an `id` key to find it.

#### users
This can be used to bootstrap the app quickly, as well as keep the app state current.
```
{
  ...data,
  DrinkUp: {
    ...data,
    status: '(pending|accepted)',
    Users: [
      {
        ...data,
        Messages: [
          {
            ...data,
          }
        ]
      }
    ]
    Bar: {
      ...data,
      Special: {
        ...data,
      },
    },
  },
}
```

#### bars
- Geo queried and returned to render map
- Load full `Bar` details after clicking on a bar
```
{
  ...data,
  Address: {
    ...data,
  },
  DrinkUp: {
    ...data,
    users: [User]
  },
  Special: {
    ...data,
  },
}
```
