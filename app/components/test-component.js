import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments)
    this.set("myInput", "defaultValue")
  },
  actions: {
    changeValue() {
      alert(this.get("myInput"))
    }
  }
});
