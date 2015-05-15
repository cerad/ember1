import Ember  from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('users', { path: '/users' });
  //this.route('users');
});

export default Router;
