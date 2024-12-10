const { defineConfig } = require("@playwright/test");

//LambdaTest Chrome Capabilities
const capabilities = {
  browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  browserVersion: "latest",
  "LT:Options": {
    platform: "Windows 10",
    build: "Playwright Test Build",
    name: "Playwright Test",
    user: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY,
    network: true,
    video: true,
    console: true,
  },
};

module.exports = defineConfig({
  testDir: "tests",
  workers: 3,
  projects: [
    {
      name: "Playwright 102 on Chrome",
      use: {
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=
          ${encodeURIComponent(JSON.stringify(capabilities))}`,
        },
      },
    },
  ],
  reporter: [["html", { open: "never" }]],
});
