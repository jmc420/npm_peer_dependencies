module.exports = {
  roots: ["./lib"],

  collectCoverage: true,

  collectCoverageFrom: ["lib/**/*.js"],

  "coveragePathIgnorePatterns": [
  ],

  moduleFileExtensions: ["js"],

  setupFilesAfterEnv: ['./jest.setup.js'],

  transform: {},

  verbose: true
};