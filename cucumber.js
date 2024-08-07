const common = [
    'src/tests/features/**/*.feature', // Load feature files
    '--require src/steps/**/*.ts', // Load step definitions
    '--require-module ts-node/register', // Load TypeScript module
    '--format progress', // Load custom formatter
    '--format json:reports/cucumber_report.json', // Save report in JSON format
  ].join(' ');
  
  module.exports = {
    default: common
  };
  