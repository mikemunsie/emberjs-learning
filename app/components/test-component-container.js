import Ember from 'ember';

export default Ember.Component.extend({
  uid: Ember.computed(function() {
    return `input-${Ember.guidFor(this)}`;
  }),
  actions: {
    change(value) {
      this.set('checked', !this.get('checked'));
    }
  }
});
