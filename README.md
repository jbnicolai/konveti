# konvèti 

[![NPM version](http://img.shields.io/npm/v/konveti.svg)](https://www.npmjs.org/package/konveti) [![Build Status](https://secure.travis-ci.org/leny/konveti.png?branch=master)](http://travis-ci.org/leny/konveti) ![Dependency Status](https://david-dm.org/leny/konveti.svg) ![Downloads counter](http://img.shields.io/npm/dm/konveti.svg)

> Simple file converter

* * *

## Getting Started

**konvèti** is a command-line tool, so it is preferable to install it globally.

    (sudo) npm install -g konveti

## Usage

Using **konvèti** is simple : 

    $ konveti source.csv dest.json
    
And that's all.  
If the destination file doesn't exists, it will be created.

### Supported formats

*For now*, **konvèti** use the extension of the files to guess their format.

The supported formats are : 

| Source Format | Destination Format |
|:-------------:|:------------------:|
| `csv` | `json` |

**Note:** For now, **konvèti** only converts `csv` to `json`, because it's the only use I have for now. :)  
I will add more converters in the future.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Lint your code using [Grunt](http://gruntjs.com).

## Release History

* **0.1.0**: Initial release (*31/05/14*)

## License

Copyright (c) 2014 leny  
Licensed under the MIT license.

## TODO

* [ ] Option to list supported converters
* [ ] Review & Refactor
* [ ] Optional force format instead of using file extension
* [ ] Add Unit Test ;)
* [ ] Add more converters
    * [ ] markdown
    * [ ] images
