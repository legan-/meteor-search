Template.registerHelper('longName', function() {
  return Meta.options.suffix;
});

Template.registerHelper('shortName', function() {
	return Meta.options.title;
});

Template.registerHelper('showYear', function () {
	return moment().format('YYYY');
});

Template.registerHelper('formatDate', function (date) {
	return moment(date).format('DD MMM YY, HH:mm');
});

Template.registerHelper('any', function (collection) {
	return collection.count() > 0;
});