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

exports.convert = ( sSource, fNext ) ->
    converter
            type: "csv"
            input: sSource
            output: null
        , ( oError, sConverted ) ->
            return fNext oError if oError
            fNext null, JSON.stringify sConverted, null, "  "
