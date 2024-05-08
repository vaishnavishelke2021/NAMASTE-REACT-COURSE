/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const { current } = require("@reduxjs/toolkit");

module.exports = {

  presets: [
    ['babel/present-env', {targets: {node: 'current'}}],
    ['babel/present-react', {runtime: 'automatic'}]
  ],

  setupFilesAfterEnv: [
    "<rootDir>/node_modules/@testing-library/jest-dom/extend-expect.js",
  ],
  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: "coverage",

  testEnvironment: "jsdom",
};
