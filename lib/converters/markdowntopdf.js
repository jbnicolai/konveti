
/*
 * konvèti
 * https://github.com/Leny/konveti
 *
 * JS/COFFEE Document - /converters/markdowntopdf.js - convert markdown to pdf
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */
"use strict";
var converter;

converter = require("markdown-pdf");

exports.convert = function(oOptions, fNext) {
  return converter().from(oOptions.source.path).to(oOptions.destination.path, fNext);
};
