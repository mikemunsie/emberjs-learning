import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showRental(rental) {
      alert(rental);
    }
  }
});
