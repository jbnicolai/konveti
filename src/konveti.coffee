###
 * konvèti
 * https://github.com/Leny/konveti
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
###

"use strict"

konveti = require "commander"

pkg = require "../package.json"

aConverters = [
    [ "csv", "json", "csvtojson" ]
    [ "json", "csv", "csvtojson" ]
]

konveti
    .version pkg.version
    .usage "[options] /path/to/fromfile.ext /path/to/destfile.ext"
    .parse process.argv

konveti.help() unless konveti.args.length

sFromFile = konveti.args[ 0 ]
sDestFile = konveti.args[ 1 ]

# TODO
