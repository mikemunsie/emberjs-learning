import Ember from 'ember';

export default Ember.Component.extend({
  click(e) {
    console.log(this);
    return this.get('change')(this.get('checked'))
  }
});
