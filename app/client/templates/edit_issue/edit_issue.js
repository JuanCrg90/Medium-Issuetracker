/*****************************************************************************/
/* EditIssue: Event Handlers */
/*****************************************************************************/
Template.EditIssue.events({
});

/*****************************************************************************/
/* EditIssue: Helpers */
/*****************************************************************************/
Template.EditIssue.helpers({
  beforeRemove: function () {
    return function (collection, id) {
      var doc = collection.findOne(id);
      if (confirm('Really delete issue: "' + doc.title + '"?')) {
        this.remove();
        Router.go('issuesList');
      }
    };
  }
});

/*****************************************************************************/
/* EditIssue: Lifecycle Hooks */
/*****************************************************************************/
Template.EditIssue.onCreated(function () {
});

Template.EditIssue.onRendered(function () {
});

Template.EditIssue.onDestroyed(function () {
});
