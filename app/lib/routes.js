Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

 Router.route('/', {
 	name: 'home',
 	controller: 'HomeController',
 	where: 'client'
 });

 Router.route('/insert_issue', {
 	name: 'insertIssue',
 	controller: 'IssuesController',
 	action: 'insert',
 	where: 'client'
 });

 Router.route('/issues_list', {
 	name: 'issuesList',
 	controller: 'IssuesController',
 	action: 'list',
 	where: 'client'
 });

 Router.route('/issues/:_id', {
 	name: 'editIssue',
 	controller: 'IssuesController',
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