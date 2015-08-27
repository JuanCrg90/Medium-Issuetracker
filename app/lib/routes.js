 Router.route('/', {
 	name: 'home',
 	controller: 'HomeController',
 	where: 'client'
 });

 Router.route('insert_issue', {
 	name: 'insertIssue',
 	controller: 'InsertIssueController',
 	action: 'insert',
 	where: 'client'
 });

 Router.route('issues_list', {
 	name: 'issuesList',
 	controller: 'IssuesListController',
 	action: 'list',
 	where: 'client'
 });

 Router.route('/issues/:_id', {
 	name: 'issues:Id',
 	controller: ':IdController',
 	action: 'edit',
 	where: 'client'
 });

 var IR_BeforeHooks  = {
 	logged: function() {
 		if (!Meteor.user()) {
 			this.render('AccessDenied');
 		} else
 		{
 			this.next();
 		}
 	}
 };

 Router.onBeforeAction(IR_BeforeHooks.logged, {only: ['issuesList', 'insertIssue']});