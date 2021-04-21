Meteor.publish("Post", function () {
  return Post.find();
});

Meteor.publish("users", function () {
  return Meteor.users.find();
});

Accounts.onCreateUser(function (options, user) {
  //make sure that the user has a profile object
  user.profile = user.profile || {};

  //initiate follow to keep track of who they follow
  user.profile.follow = [];

  return user;
});