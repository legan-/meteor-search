Meteor.startup(function() {

  Factory.define('word', Words, {
    name: function() { return Fake.word(); }
  });

  if (Words.find({}).count() === 0) {

    _(1000).times(function(n) {
      Factory.create('word');
    });

  }

});