import Ember from 'ember';

// Defining an Ember Class
const Person = Ember.Object.extend({
  init() {
    // This is basically the constructor
  },
  say(thing) {
    alert(`${this.get('name')} says: ${thing}`);
  }
});

const Soldier = Person.extend({
  say(thing) {
    // this will call the method in the parent class (Person#say), appending
    // the string ', sir!' to the variable `thing` passed in
    this._super(`${thing}, sir!`);
  }
});

let yehuda = Soldier.create({
  name: 'Yehuda Katz'
});


export default Ember.Component.extend({
  didInsertElement() {

  },
  fullName: Ember.computed('yourName', function() {
    const name = this.yourName ? this.get("yourName") : "I don't know your name";
    return `(${name})`;
  }),
  actions: {
    testFunctionFromComponent: function () {
      yehuda.say('Yes');
    }
  }
});
