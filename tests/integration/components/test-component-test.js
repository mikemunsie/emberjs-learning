import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('test-component', 'Integration | Component | test component', {
  integration: true
});

test('it renders', function(assert) {

  // Template block usage:
  this.render(hbs`
    {{#test-component}}
      template block text
    {{/test-component}}
  `);

  assert.equal(this.$().find(".test-component__yieldContent").text().trim(), 'template block text');
});
