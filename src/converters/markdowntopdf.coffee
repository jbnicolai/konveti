###
 * konvèti
 * https://github.com/Leny/konveti
 *
 * JS/COFFEE Document - /converters/markdowntopdf.js - convert markdown to pdf
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
###

"use strict"

converter = require "markdown-pdf"

exports.convert = ( oOptions, fNext ) ->
    converter()
        .from oOptions.source.path
        .to oOptions.destination.path, fNext
