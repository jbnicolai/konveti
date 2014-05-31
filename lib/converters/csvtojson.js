
/*
 * konvèti
 * https://github.com/Leny/konveti
 *
 * JS/COFFEE Document - /converters/csvtojson.js - convert csv to json
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */
"use strict";
var converter;

converter = require("convert-json");

exports.convert = function(sSource, fNext) {
  return converter({
    type: "csv",
    input: sSource,
    output: null
  }, function(oError, sConverted) {
    if (oError) {
      return fNext(oError);
    }
    return fNext(null, JSON.stringify(sConverted, null, "  "));
  });
};
