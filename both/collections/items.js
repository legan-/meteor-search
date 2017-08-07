Items = new Mongo.Collection('items');

ItemsSchema = new SimpleSchema({
  'name': {
    type: String,
    label: 'Item Name'
  },
  'created': {
    type: Date,
    label: 'Date',
    denyUpdate: true,
    optional: true,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      }
    }
  },
});

Items.attachSchema(ItemsSchema);