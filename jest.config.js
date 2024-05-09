/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const { current } = require("@reduxjs/toolkit");

module.exports = {

  setupFilesAfterEnv: [
    "<rootDir>/node_modules/@testing-library/jest-dom/extend-expect.js",
  ],
  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: "coverage",

  testEnvironment: "jsdom",
};
