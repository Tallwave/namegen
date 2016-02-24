# namegen
A very simple node server that returns randomly generated names using [faker.js](https://github.com/Marak/faker.js).

# URLS
`/names`

Returns a JSON array of randomly generated names like this:

```json
{
  "id": "cc050911-ade7-41d8-8b0c-26906e5858a3",
  "name": "Nikita Mohr",
  "email": "Eudora_Hessel@gmail.com",
  "address": "4102 Maia Square",
  "image": "https://s3.amazonaws.com/uifaces/faces/twitter/tjrus/128.jpg"
}
```

You can optionally add a querystring to set the number of names returned, by default it is 20. `/names?num=10`

`/names/:some-id`

Returns a single JSON object of a randomly generated name. Do note that this is really random, if you take an `id` from `/names`, it will almost certainly **not** be the same one returned here.

# Misc
This is currently deployed on [heroku](https://tw-namegen.herokuapp.com/names).

# License
MIT. See the LICENSE text file for details.
