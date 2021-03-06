#!/usr/bin/env node

/*
 * konvèti
 * https://github.com/Leny/konveti
 *
 * JS/COFFEE Document - /konveti.js - main entry point, commander setup and runner
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */
"use strict";
var chalk, error, fs, konveti, mkdirp, oConverters, path, pkg, sDestFile, sSourceFile, success;

konveti = require("commander");

fs = require("fs");

path = require("path");

mkdirp = require("mkdirp");

chalk = require("chalk");

error = chalk.bold.red;

success = chalk.bold.green;

pkg = require("../package.json");

oConverters = {
  csv: {
    json: "csvtojson"
  },
  md: {
    pdf: "markdowntopdf"
  }
};

konveti.version(pkg.version).usage("[options] /path/to/fromfile.ext /path/to/destfile.ext").parse(process.argv);

if (!konveti.args.length) {
  konveti.help();
}

if (konveti.args.length !== 2) {
  console.log(error("✘ konvèti needs exactly two parameters : a source file and a destination file !"));
  process.exit(1);
}

sSourceFile = konveti.args[0];

sDestFile = konveti.args[1];

fs.exists(sSourceFile, function(bExists) {
  var oOptions, sConverter, sDestFormat, sSourceFormat;
  if (!bExists) {
    console.log(error("✘ the source file '" + sSourceFile + "' doesn't exists !"));
    process.exit(1);
  }
  sSourceFormat = path.extname(sSourceFile).substring(1);
  sDestFormat = path.extname(sDestFile).substring(1);
  if (!oConverters[sSourceFormat] || !(sConverter = oConverters[sSourceFormat][sDestFormat])) {
    console.log(error("✘ there's no converter (yet) from '" + sSourceFormat + "' to '" + sDestFormat + "' format."));
    process.exit(1);
  }
  oOptions = {
    source: {
      format: sSourceFormat,
      path: sSourceFile
    },
    destination: {
      format: sDestFormat,
      path: sDestFile
    }
  };
  return fs.readFile(sSourceFile, {
    encoding: "utf-8"
  }, function(oError, sContent) {
    if (oError) {
      console.log(error("✘ An error occuring while reading the '" + sSourceFile + "' file."));
      console.log(oError);
      process.exit(1);
    }
    oOptions.source.content = sContent;
    return require("./converters/" + sConverter + ".js").convert(oOptions, function(oError, sConvertedContent, bFileIsAlreadyCreated) {
      if (oError) {
        console.log(error("✘ An error occuring while converting the '" + sSourceFile + "' file to " + sDestFormat + "."));
        console.log(oError);
        process.exit(1);
      }
      if (bFileIsAlreadyCreated) {
        return console.log(success("✔ The converted file is written at '" + sDestFile + "' path."));
      }
      return mkdirp(path.dirname(sDestFile), function(oError) {
        if (oError) {
          console.log(error("✘ An error occuring while write the '" + sDestFile + "'."));
          console.log(oError);
          process.exit(1);
        }
        return fs.writeFile(sDestFile, sConvertedContent, function(oError) {
          if (oError) {
            console.log(error("✘ An error occuring while write the '" + sDestFile + "'."));
            console.log(oError);
            process.exit(1);
          }
          return console.log(success("✔ The converted file is written at '" + sDestFile + "' path."));
        });
      });
    });
  });
});
