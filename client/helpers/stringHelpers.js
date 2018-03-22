Template.registerHelper('longName', () => Meta.options.suffix);

Template.registerHelper('shortName', () => Meta.options.title);

Template.registerHelper('showYear', () => moment().format('YYYY'));

Template.registerHelper('formatDate', date => moment(date).format('DD MMM YY, HH:mm'));

Template.registerHelper('any', collection => collection.count() > 0);