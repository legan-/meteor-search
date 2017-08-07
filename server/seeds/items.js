Meteor.startup(function() {

  Factory.define('item', Items, {
    name: function() { return Fake.word(); }
  });

  if (Items.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('item');
    });

  }

});