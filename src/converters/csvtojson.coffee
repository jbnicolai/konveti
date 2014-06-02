###
 * konvèti
 * https://github.com/Leny/konveti
 *
 * JS/COFFEE Document - /converters/csvtojson.js - convert csv to json
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
###

"use strict"

converter = require "convert-json"

exports.convert = ( oOptions, fNext ) ->
    converter
            type: "csv"
            input: oOptions.source.content
            output: null
        , ( oError, sConverted ) ->
            return fNext oError if oError
            fNext null, JSON.stringify sConverted, null, "  "
