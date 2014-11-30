# generator-ctools-layout [![Build Status](https://secure.travis-ci.org/pixelwhip/generator-ctools-layout.png?branch=master)](https://travis-ci.org/pixelwhip/generator-ctools-layout)

> [Yeoman](http://yeoman.io) generator

This is a Yeoman generator for Drupal's ctools layout plugins. This creates all the necessary files needed for a custom layout plugin. While you will be prompted for a list of regions, this generator makes no assumptions about the markup or CSS you'll need to actually style the layout. It simply creates an empty CSS file, a placeholder thumbnail image, a template with all the rendered regions and the include file to glue it all together. The rest is up to you.

## Getting Started

Install Yeoman if you haven't already.

```bash
npm install -g yo
```

To install generator-ctools-layout from npm, run:

```bash
npm install -g generator-ctools-layout
```

Create a new directory in your ctools layout plugins folder with the machine name of your layout. For example, if you have a layout named *Landing Page* you would type the following:

```bash
mkdir landing_page
```

Now go into your newly created layout plugin folder and let Yeoman do his thing.

```bash
cd landing_page
yo ctools-layout
```

Yeoman will ask you some questions about your layout then build everything out for you!

For more information about ctools layouts see (https://www.drupal.org/node/495654)[https://www.drupal.org/node/495654].

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT
