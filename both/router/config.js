Router.configure({
  controller: 'AppController',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

// Router.plugin('ensureSignedIn', {
//   except: ['signUp']
// });

// Router.plugin('loading', { loadingTemplate: 'loading' });

// Check this in the future.
// Router.plugin('dataNotFound', { notFoundTemplate: 'notFound' });