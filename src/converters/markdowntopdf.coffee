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

exports.convert = ( sSource, fNext ) ->
    converter()
        .from
            .string sSource
        .to
            .string {}, fNext
