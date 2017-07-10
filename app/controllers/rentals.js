import Ember from 'ember';

export default Ember.Controller.extend({

  // This function will be available in the template as "test"
  test: () => {
    alert("Test Function homie");
  },

  // Custom actions (which do we need in the actions section?)
  actions: {
    test() {
      alert("yeah boi")
    },
    filterByCity(param) {
      if (param !== '') {
        return this.get('store').query('rental', { city: param });
      } else {
        return this.get('store').findAll('rental');
      }
    }
  }
});
