var restify = require('restify');
var faker = require('faker');

function randomName() {
  var fakeName = {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    image: faker.image.avatar()
  };
  return fakeName;
}

function handleNames(req, res, next) {
  var numberOfNames = req.query.num || 20;
  var fakeNames = [];
  for (var i = 0; i < numberOfNames; i += 1) {
    fakeNames.push(randomName());
  }
  res.json(fakeNames);
  next();
}

function handleName(req, res, next) {
  var name = randomName();
  name.bio = faker.lorem.paragraph();
  res.json(name);
  next();
}

var server = restify.createServer();
server.use(restify.queryParser());
server.get('/names', handleNames);
server.get('/names/:id', handleName);

var port = process.env.PORT || 8080;
server.listen(port, function() {
  console.log('Listening on ' + port);
})
