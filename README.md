Compass Boilerplate [![Build Status](https://travis-ci.org/sir-dunxalot/compass-boilerplate.svg?branch=master)](https://travis-ci.org/sir-dunxalot/compass-boilerplate)
======

The one-line-install foundation for clean, low-specificity, compass-based stylesheets, powered by [Libsass](https://github.com/sass/libsass). Supports [node-sass](https://github.com/sass/node-sass)).

- [Installation](#installation)
- [Example Usage](#example-usage)
- [Documentation - WIP](#documentation)
- [Development](#development)

## Installation

```sh
npm install compass-mixins # Dependency
npm install compass-boilerplate
```

```scss
/* app.scss */

@import 'compass-boilerplate-vendor/normalize'; // If you want it
@import 'compass-boilerplate-vendor/html5bp'; // If you want it
@import 'compass-boilerplate';
```

## Example Usage

```scss
@import 'compass-boilerplate';

@include block('button', $enableModifiers:true) {
  @include transform(translateY(2px)); // Access to Compass mixins
  @include rem(padding, 1); // Responsive sizing

  @include element('text', $enableModifiers:true) {
    @extend %inline-block; // Common placeholders

    @include modifier('italic') {
      font-style: italic;
    }
  }

  @include modifier('primary') {
    background-color: #628;
  }
}
```

Becomes:

```css
.button,
[class*='button__'] {
  -webkit-transform: -webkit-translateY(2px);
  -moz-transform: -moz-translateY(2px);
  transform: translateY(2px);
}

.button__primary {
  background-color: #628;
}

.button-text,
[class*='button-text__'] {
  -moz-display: inline-block;
  display: inline-block;
  vertical-align: middle;
}

.button-text__italic {
  font-style: italic;
}
```

## Documentation

- [BEM Methodology](#bem-methodology)
  - Blocks
  - Elements
  - Modifiers
- Namespacing
- Lists
- Media Queries
- Placeholders
- Strings
- Tables
- Third-party SASS tools
  - [Compass mixins](https://github.com/Igosuki/compass-mixins)
  - Normalize
  - HTML5BP
- Units and Layout
- Variables

### BEM Methodology

If you're not familiar with the BEM approach of organizing CSS selectors, then read his [CSS Tricks article](https://css-tricks.com/bem-101/).

### Mixin: Block

`@include block()` sets the context for any block styling. It automatically namespaces nested classes.

## Development

PRs are welcome! It's easy to work on this project:

```sh
git clone git@github.com:sir-dunxalot/compass-boilerplate.git
cd compass-boilerplate
npm install
```

Please work on a feature branch and issue a PR to `master` *without* a version bump.

To run the tests:

```
npm test
```
