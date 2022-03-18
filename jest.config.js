module.exports = {
    "testEnvironment": "jsdom",
    "moduleNameMapper": {
      "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
      "\\.(gif|ttf|eot|svg|jpeg)$": "<rootDir>/__mocks__/fileMock.js"
    },
    "setupFilesAfterEnv": [
      "<rootDir>/jest/setupTests.js", "<rootDir>/jest/setEnvVars.js", 
    ]
}