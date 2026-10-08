module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'webpack'],
    files: ['src/tests.entry.js'],
    preprocessors: { 'src/tests.entry.js': ['webpack'] },
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      resolve: { extensions: ['.js', '.jsx'] },
      module: {
        rules: [{
          test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
            // instrumenta el código para el informe de cobertura
            plugins: [['istanbul', { exclude: ['**/*.spec.js', '**/*.spec.jsx', 'src/testUtils.js', 'src/tests.entry.js'] }]],
          },
        }],
      },
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [{ type: 'html', subdir: 'html' }, { type: 'text-summary' }],
    },
    customLaunchers: { ChromeHeadlessCI: { base: 'ChromeHeadless', flags: ['--no-sandbox'] } },
    browsers: ['ChromeHeadlessCI'],
    singleRun: false,
  });
};
