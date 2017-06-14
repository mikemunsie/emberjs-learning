import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {

    // Always goto rentals when visiting this route
    this.replaceWith('rentals');
  }
});
