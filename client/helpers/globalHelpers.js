Template.registerHelper('username', function () {
	var id = this.userId ? this.userId : this._id
		, result = 'n/a';

	if (id && Meteor.users.findOne(id)) {
		result = Meteor.users.findOne(id).username;
	}

	return result;
});