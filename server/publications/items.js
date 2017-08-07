// Manual:
// https://github.com/englue/meteor-publish-composite#reporting-issuesbugs

// Meteor.publish('items', function () {
//   return Items.find();
// });

publishComposite('items', {
	find() {
		return Items.find();
	}
});
