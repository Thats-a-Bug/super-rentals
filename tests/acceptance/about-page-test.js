import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import {
  click,
  currentURL,
  visit,
} from '@ember/test-helpers'

module('Acceptance | about page', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('should link to information about the company', async function(assert) {
    await visit('/rentals');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });

  test('should link to home page', async function(assert) {
    await visit('/about');
    await click(".menu-home");
    assert.equal(currentURL(), '/rentals', 'should navigate to home');
  });
});
