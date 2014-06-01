
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

exports.convert = function(sSource, fNext) {
  return converter().from.string(sSource).to.string({}, fNext);
};
