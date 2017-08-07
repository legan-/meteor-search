Router.route('/', {
  name: 'search',
  controller: 'SearchController'
});

JsonRoutes.add('get', '/words.json', function (req, res, next) {
  JsonRoutes.sendResult(res, {
    data: Words.find().fetch()
  });
});