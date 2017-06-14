import Ember from 'ember';

export default Ember.Component.extend({
  isWide: false,
  actions: {
    toggleImageSize() {
      console.log(this);
      this.toggleProperty('isWide');
    }
  }
});
