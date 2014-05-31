#!/usr/bin/env node

/*
 * konvèti
 * https://github.com/Leny/konveti
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */
"use strict";
var aConverters, konveti, pkg, sDestFile, sFromFile;

konveti = require("commander");

pkg = require("../package.json");

aConverters = [["csv", "json", "csvtojson"], ["json", "csv", "csvtojson"]];

konveti.version(pkg.version).usage("[options] /path/to/fromfile.ext /path/to/destfile.ext").parse(process.argv);

if (!konveti.args.length) {
  konveti.help();
}

sFromFile = konveti.args[0];

sDestFile = konveti.args[1];
