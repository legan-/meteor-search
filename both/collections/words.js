Words = new Mongo.Collection('words');

WordsSchema = new SimpleSchema({
  'name': {
    type: String,
    label: 'Word'
  },
  'createdAt': {
    type: Date,
    label: 'Date',
    denyUpdate: true,
    optional: true,
    autoValue: () => {
      if (this.isInsert) {
        return new Date();
      }
    }
  },
});

Words.attachSchema(WordsSchema);