import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    testChange(val) {
      this.get("onchange")(val);
    }
  }
});
