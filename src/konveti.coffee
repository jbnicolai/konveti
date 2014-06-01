###
 * konvèti
 * https://github.com/Leny/konveti
 *
 * JS/COFFEE Document - /konveti.js - main entry point, commander setup and runner
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
###

"use strict"

konveti = require "commander"
fs = require "fs"
path = require "path"
mkdirp = require "mkdirp"
chalk = require "chalk"
error = chalk.bold.red
success = chalk.bold.green

pkg = require "../package.json"

oConverters =
    csv:
        json: "csvtojson"
    md:
        pdf: "markdowntopdf"

konveti
    .version pkg.version
    .usage "[options] /path/to/fromfile.ext /path/to/destfile.ext"
    .parse process.argv

konveti.help() unless konveti.args.length

unless konveti.args.length is 2
    console.log error "✘ konvèti needs exactly two parameters : a source file and a destination file !"
    process.exit 1

sSourceFile = konveti.args[ 0 ]
sDestFile = konveti.args[ 1 ]

fs.exists sSourceFile, ( bExists ) ->
    unless bExists
        console.log error "✘ the source file '#{ sSourceFile }' doesn't exists !"
        process.exit 1

    sSourceFormat = path
        .extname sSourceFile
        .substring 1

    sDestFormat = path
        .extname sDestFile
        .substring 1

    if not oConverters[ sSourceFormat ] or not sConverter = oConverters[ sSourceFormat ][ sDestFormat ]
        console.log error "✘ there's no converter (yet) from '#{ sSourceFormat }' to '#{ sDestFormat }' format."
        process.exit 1

    fs.readFile sSourceFile, { encoding: "utf-8" }, ( oError, sContent ) ->
        if oError
            console.log error "✘ An error occuring while reading the '#{ sSourceFile }' file."
            console.log oError
            process.exit 1
        require( "./converters/#{ sConverter }.js" ).convert sContent, ( oError, sConvertedContent ) ->
            if oError
                console.log error "✘ An error occuring while converting the '#{ sSourceFile }' file to #{ sDestFormat }."
                console.log oError
                process.exit 1
            mkdirp path.dirname( sDestFile ), ( oError ) ->
                if oError
                    console.log error "✘ An error occuring while write the '#{ sDestFile }'."
                    console.log oError
                    process.exit 1
                fs.writeFile sDestFile, sConvertedContent, ( oError ) ->
                    if oError
                        console.log error "✘ An error occuring while write the '#{ sDestFile }'."
                        console.log oError
                        process.exit 1
                    console.log success "✔ The converted file is written at '#{ sDestFile }' path."

