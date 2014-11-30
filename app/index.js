'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var _  = require('underscore');

// Import Underscore.string to separate object, because there are conflict functions (include, reverse, contains)
_.str = require('underscore.string');
_.mixin(_.str.exports());
_.str.include('Underscore.string', 'string');

var CtoolsLayoutGenerator = yeoman.generators.Base.extend({
  promptUser: function () {
    var done = this.async();

    // have Yeoman greet the user
    console.log(this.yeoman);

    var prompts = [
      {
        name: 'layoutName',
        message: 'What is your layout\'s name?',
        default: _.capitalize(this.appname)
      },
      {
        name: 'layoutId',
        message: 'What is your layout\'s machine name?',
        default: _.underscored(this.appname)
      },
      {
        name: 'layoutModule',
        message: 'What is the machine name of your module or theme?'
      },
      {
        name: 'layoutCategory',
        message: 'What category should this layout go in?',
        default: 'custom'
      },
      {
        name: 'layoutRegions',
        message: 'Enter a comma separated list of region names.',
        default: 'Header, Main, Footer'
      },
      {
        type: 'confirm',
        name: 'addAdminCss',
        message: 'Would you like to include an Admin CSS file?',
        default: true
      },
      {
        type: 'confirm',
        name: 'useScss',
        message: 'Would you like to use Scss for styling?',
        default: true
      }
    ];

    this.prompt(prompts, function (props) {
      this.layoutName = props.layoutName;
      this.layoutId = props.layoutId;
      this.layoutModule = props.layoutModule;
      this.layoutCategory = props.layoutCategory;
      this.addAdminCss = props.addAdminCss;
      this.useScss = props.useScss;
      this.layoutRegions = _.words(props.layoutRegions, ',');

      done();
    }.bind(this));
  },

  copyMainFiles: function () {
    this.copy('_layout.png', this.layoutId + '.png');

    var context = {
      name: this.layoutName,
      id: this.layoutId,
      module: this.layoutModule,
      category: this.layoutCategory,
      regions: this.layoutRegions
    };

    var stylesheetSuffix = this.useScss ? '.scss' : '.css';

    this.template('_layout.inc', this.layoutId + '.inc', context);
    this.template('_layout.tpl.php', _.slugify(this.layoutModule + '-' + this.layoutId) + '.tpl.php', context);
    this.template(
      '_layout.css',
      this.layoutId + stylesheetSuffix,
      context
    );
    if (this.addAdminCss) {
      this.template(
        '_layout.css',
        'admin_' + this.layoutId + stylesheetSuffix,
        context
      );
    }
  }
});

module.exports = CtoolsLayoutGenerator;
