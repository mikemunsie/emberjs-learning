import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  value: '',
  init() {
    this._super(...arguments);

    // When you init, don't pass anything to the filter and then set the results
    this.get('filter')('').then((results) => this.set('results', results));
  },
  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('value'); // The value of the input
      let filterAction = this.get('filter'); // A prop passed in rentals.hbs
      filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
    }
  }
});
