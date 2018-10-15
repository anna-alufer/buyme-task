import { moduleForModel, test } from 'ember-qunit';

moduleForModel('save', 'Unit | Model | save', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
