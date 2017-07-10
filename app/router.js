import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('rentals', function() {

    // This will use the "show" route when it matches this path
    this.route('show', { path: '/:rental_id' });
  });
  this.route('about');
  this.route('contact');
});

export default Router;
