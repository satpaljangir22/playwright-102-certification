const { defineConfig } = require("@playwright/test");

//LambdaTest Chrome Capabilities
const capabilities = {
  browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  browserVersion: "latest",
  "LT:Options": {
    platform: "Windows 10",
    build: "Playwright Test Build",
    name: "Playwright Test",
    user: "satpaljangir22",
    accessKey: "VMLFdKdIB2MxcQCLlCr2i6ws1803yJVwWIvsQAtsSPJIJJcD98",
    network: true,
    video: true,
    console: true,
    tunnel: false, // Add tunnel configuration if testing locally hosted webpage
    tunnelName: "", // Optional
    geoLocation: "", // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
  },
};

module.exports = defineConfig({
  testDir: "tests",
  projects: [
    {
      name: "Chrome on windows 10",
      use: {
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=
          ${encodeURIComponent(JSON.stringify(capabilities))}`,
        },
      },
    },
  ],
});
