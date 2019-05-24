const { ConcatSource } = require("webpack-sources");

function PragmaLibraryPlugin() {}

PragmaLibraryPlugin.prototype.apply = function(compiler) {
    compiler.plugin('emit', function(compilation, callback) {
        for (var file in compilation.assets) {
            compilation.assets[file] = new ConcatSource(
                '.pragma library',
                "\n",
                compilation.assets[file]
            );
        }

        callback();
    });
};

module.exports = PragmaLibraryPlugin;
