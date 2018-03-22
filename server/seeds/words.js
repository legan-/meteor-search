Meteor.startup(() => {

  JsonRoutes.add('get', '/words.json', (req, res, next) => {
    JsonRoutes.sendResult(res, {
      data: Words.find().fetch()
    });
  });

  Factory.define('word', Words, {
    name: () => Fake.word()
  });

  if (Words.find({}).count() === 0) {
    _(1000).times((n) => Factory.create('word'));
  }

});