import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import {
  click,
  currentURL,
  visit,
} from '@ember/test-helpers'

import { percySnapshot } from 'ember-percy'

module('Acceptance | about page', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('should link to information about the company', async function(assert) {
    await visit('/rentals');
    await click(".button-to-about");
    assert.equal(currentURL(), '/about', 'should navigate to about');
    await percySnapshot("button to home about page", {scope: ".body"})
  });

  test('should link to home page', async function(assert) {
    await visit('/about');
    await click(".button-to-home");
    assert.equal(currentURL(), '/rentals', 'should navigate to home');
    await percySnapshot("button home page from about", {scope: ".body"})
  });

});

