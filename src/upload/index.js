'use strict';
var multiparty = require('multiparty');
var fs = require('fs');
var path = require('path');
var util = require("../util/index");
var basePath = path.join(process.cwd(), "files/");
var async = require('async');
var parseCsv = require('../core/csv');

module.exports = function(req, res, cb) {
    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
        if (err) throw err;
        var parallelTask = [];
        Object.keys(files).forEach(function(key) {
            files[key].forEach(function(file) {
                var toPath = path.join(basePath, file.originalFilename);
                parallelTask.push(function(callback) {
                    async.waterfall(waterfallTask(file.path, toPath), function(err, results) {
                        if (err) callback(err);
                        callback(null, results);
                    });
                });
            });
        });
        async.parallel(parallelTask, function(err, results) {
            if (err) console.log(err);
            parseCsv(results[0], cb);
        });
    });
};

function waterfallTask(fromFilePath, toPath) {
    var waterfallTask = [];
    waterfallTask.push(function(callback) {
        fs.readFile(fromFilePath, function(err, data) {
            if (err) callback(err);
            callback(null, data);
        });
    });
    waterfallTask.push(function(data, callback) {
        fs.writeFile(toPath, data, {
            encoding: "utf8"
        }, function(err) {
            if (err) callback(err);
            callback(null, toPath);
        });
    });
    return waterfallTask;
}
