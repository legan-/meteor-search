Meteor.methods({
	addItem: function (item) {
		Items.insert(item);
	}
});