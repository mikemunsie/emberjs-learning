import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {

    // Always goto scientists when visiting this route
    this.replaceWith('rentals');
  }
});
