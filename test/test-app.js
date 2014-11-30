/*global describe, before, it*/
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('ctools-layout:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({
        layoutModule: 'module'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'temp_test.png',
      'temp_test.inc',
      'module-temp-test.tpl.php',
      'temp_test.scss',
      'admin_temp_test.scss'
    ]);
  });
});
